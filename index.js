require('dotenv').config();
const cheerio = require('cheerio');

const sendMail = require('./lib/mailer');
const {
  checkDate,
  getHtml,
  getHtmlResults,
  getTextResults,
  sanitizeString,
  sortData,
} = require('./lib/utils');
const getArtists = require('./lib/getArtists');

const results = [];
const BASE_URL = process.env.BASE_URL;

async function getReleases(artists, page = 1) {
  const url = page === 1 ? BASE_URL : `${BASE_URL}/page/${page}`;
  const html = await getHtml(url);
  const $ = cheerio.load(html);
  const posts = $('.title > h2 > a')
    .get()
    .map((post) => ({
      title: post.attribs.title.replace('Permanent Link to ', ''),
      link: post.attribs.href,
    }));
  const lastPostDate = $('.clock').last().text();
  const shouldContinue = checkDate(lastPostDate);

  posts.forEach((post) => {
    const enDashIndex = post.title.indexOf('–');
    const title = post.title.substring(0, enDashIndex);
    const artist = sanitizeString(title);

    if (artists.has(artist)) {
      results.push(post);
    }
  });

  if (shouldContinue) {
    getReleases(artists, page + 1);
  } else if (results.length > 0) {
    const data = sortData(results);
    const html = getHtmlResults(data);
    const text = getTextResults(data);

    sendMail(html, text);
  } else if (results.length === 0) {
    const message = 'No results today';
    const htmlMessage = `<p>${message}</p>`;

    sendMail(htmlMessage, message);
  }
}

async function go() {
  const data = await getArtists();
  const artists = new Set(data.map((artist) => sanitizeString(artist)));

  getReleases(artists, 1);
}

go();
