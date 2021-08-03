const axios = require('axios');
const subtract = require('date-fns/sub');
const isAfter = require('date-fns/isAfter');

function checkDate(lastPostDate) {
  const dateString = lastPostDate.replace(' On ', '').replace(/-/g, '');
  const postDate = new Date(dateString);
  const dateToCheck = subtract(new Date(), { days: 2 });
  const shouldContinue = isAfter(postDate, dateToCheck);

  return shouldContinue;
}

async function getHtml(url) {
  const { data: html } = await axios.get(url);
  return html;
}

function getHtmlResults(results) {
  let html = '<ul>';

  results.forEach(({ title, link }) => {
    html = `${html}<li><a href="${link}">${title}</a></li>`;
  });

  return `${html}</ul>`;
}

function getTextResults(results) {
  let text = '';

  results.forEach(({ title, link }, index) => {
    const newLine = index > 0 ? '\n' : '';
    text = `${text}${newLine}• ${title}: ${link}`;
  });

  return text;
}

function sortData(data) {
  return data.sort((a, b) =>
    a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1,
  );
}

function sanitizeString(value) {
  return value
    .trim()
    .toLowerCase()
    .replace('&', 'and')
    .replace(/\./g, '')
    .replace(/\//g, '')
    .replace(/\?/g, '')
    .replace(/-/g, '')
    .replace(/é/g, 'e')
    .replace(/ö/g, 'o');
}

module.exports = {
  checkDate,
  getHtml,
  getHtmlResults,
  getTextResults,
  sanitizeString,
  sortData,
};
