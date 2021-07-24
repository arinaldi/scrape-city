const axios = require('axios');
const subtract = require('date-fns/sub');
const isAfter = require('date-fns/isAfter');

const checkDate = (lastPostDate) => {
  const dateString = lastPostDate
    .replace(' On ', '')
    .replace('-', '')
    .replace('-', '');
  const postDate = new Date(dateString);
  const dateToCheck = subtract(new Date(), { days: 2 });
  const shouldContinue = isAfter(postDate, dateToCheck);

  return shouldContinue;
};

const getHtml = async (url) => {
  const { data: html } = await axios.get(url);
  return html;
};

const getHtmlResults = (results) => {
  let html = '<ul>';

  results.forEach(({ title, link }) => {
    html = `${html}<li><a href="${link}">${title}</a></li>`;
  });

  return `${html}</ul>`;
};

const getTextResults = (results) => {
  let text = '';

  results.forEach(({ title, link }, index) => {
    const newLine = index > 0 ? '\n' : '';
    text = `${text}${newLine}• ${title}: ${link}`;
  });

  return text;
};

const sortData = (data) =>
  data.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));

module.exports = {
  checkDate,
  getHtml,
  getHtmlResults,
  getTextResults,
  sortData,
};
