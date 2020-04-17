import axios from 'axios';
import cheerio from 'cheerio';
// import cron from 'node-cron';

import artists from './artists';

const BASE_URL = 'http://newalbumreleases.net/category/cat/page';
const artistsLower = artists.map(artist => (
  artist.toLowerCase().replace('&', 'and')
));

const getHtml = async (url) => {
  const { data: html } = await axios.get(url);
  return html;
};

const checkDate = ($) => {
  let shouldContinue;

  $('.clock').each((i, el) => {
    const postDateString = $(el).text();
    const postDate = parseInt(postDateString.split(' ')[4]);
    const today = (new Date()).getDate();

    shouldContinue = postDate === today;
  });

  return shouldContinue;
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

  const shouldContinue = checkDate($);

  if (shouldContinue) {
    getReleases(page + 1);
  } else if (results.length > 0) {
    results.forEach(result => {
      console.log(result.title);
      console.log(result.link);
    });
  }
};

getReleases();
// 0 8 * * *
// cron.schedule('* * * * *', () => {
//   console.log('RUNNING THE CRON');
//   getReleases();
// });
