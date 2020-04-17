import axios from 'axios';
import cheerio from 'cheerio';

import artists from './artists';

const BASE_URL = 'http://newalbumreleases.net/category/cat/page';
const artistsLower = artists.map(artist => artist.toLowerCase().replace('&', 'and'));

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

const getReleases = async (page = 1) => {
  const html = await getHtml(`${BASE_URL}/${page}`);
  const $ = cheerio.load(html);
  const posts = $('.title > h2 > a')
    .get()
    .map(post => ({
      title: post.attribs.title.replace('Permanent Link to ', ''),
      link: post.attribs.href,
    }));

  posts.forEach(({ title, link }) => {
    const enDashIndex = title.indexOf('–');
    const artist = title
      .substring(0, enDashIndex)
      .replace('&', 'and')
      .toLowerCase()
      .trim();

    if (artistsLower.includes(artist)) {
      console.log('TITLE:', title);
      console.log('LINK:', link);
    }
  });

  const shouldContinue = checkDate($);

  if (shouldContinue) {
    getReleases(page + 1);
  }
};

getReleases();
