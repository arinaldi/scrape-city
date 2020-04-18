require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');

const artists = require('./artists');
const sendMail = require('./mailer');

const BASE_URL = 'http://newalbumreleases.net/category/cat/page';
const artistsLower = artists.map(artist => (
  artist.toLowerCase().replace('&', 'and')
));

const getHtml = async (url) => {
  const { data: html } = await axios.get(url);
  return html;
};

const checkDate = (lastPostDate) => {
  const postDate = parseInt(lastPostDate.split(' ')[4]);
  const yesterday = (new Date()).getDate() - 1;

  return postDate >= yesterday;
};

const results = [];

const getReleases = async (page = 1) => {
  const html = await getHtml(`${BASE_URL}/${page}`);
  const $ = cheerio.load(html);
  const posts = $('.title > h2 > a')
    .get()
    .map(post => ({
      title: post.attribs.title.replace('Permanent Link to ', ''),
      link: post.attribs.href,
    }));

  posts.forEach(post => {
    const enDashIndex = post.title.indexOf('–');
    const artist = post.title
      .substring(0, enDashIndex)
      .replace('&', 'and')
      .toLowerCase()
      .trim();

    if (artistsLower.includes(artist)) {
      results.push(post);
    }
  });

  const lastPostDate = $('.clock').last().text();
  const shouldContinue = checkDate(lastPostDate);

  if (shouldContinue) {
    getReleases(page + 1);
  } else if (results.length > 0) {
    sendMail(results);
  }
};

getReleases();
