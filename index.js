import axios from 'axios';
import cheerio from 'cheerio';

const BASE_URL = 'http://newalbumreleases.net/category/cat/page';
const EN_DASH = '&#8211;';

const getHtml = async (url) => {
  const { data: html } = await axios.get(url);
  return html;
};

const getReleases = async () => {
  const html = await getHtml(`${BASE_URL}/1`);
  const $ = cheerio.load(html);
  const posts = $('.title > h2 > a')
    .get()
    .map(post => ({
      title: post.attribs.title.replace('Permanent Link to ', ''),
      link: post.attribs.href,
    }));
  console.log(posts);
};

getReleases();
