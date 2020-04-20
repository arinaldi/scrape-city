require('dotenv').config();
const cheerio = require('cheerio');

const sendMail = require('./lib/mailer');
const { checkDate, getHtml } = require('./lib/utils');
const getArtists = require('./lib/getArtists');

const results = [];

const getReleases = async (artists, page = 1) => {
  const html = await getHtml(`${process.env.BASE_URL}/${page}`);
  const $ = cheerio.load(html);
  const posts = $('.title > h2 > a')
    .get()
    .map(post => ({
      title: post.attribs.title.replace('Permanent Link to ', ''),
      link: post.attribs.href,
    }));
  const lastPostDate = $('.clock').last().text();
  const shouldContinue = checkDate(lastPostDate);

  posts.forEach(post => {
    const enDashIndex = post.title.indexOf('–');
    const artist = post.title
      .substring(0, enDashIndex)
      .replace('&', 'and')
      .toLowerCase()
      .trim();

    if (artists.includes(artist)) {
      results.push(post);
    }
  });

  if (shouldContinue) {
    getReleases(artists, page + 1);
  } else if (results.length > 0) {
    sendMail(results);
  } else if (results.lenth === 0) {
    console.log('No results; mail not sent');
  }
};

const go = async () => {
  const data = await getArtists();
  const artists = data.map(artist => (
    artist.toLowerCase().replace('&', 'and')
  ));

  getReleases(artists, 1);
};

go();
