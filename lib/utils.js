const axios = require('axios');

const checkDate = lastPostDate => {
  const dateString = lastPostDate
    .replace(' On ', '')
    .replace('-', '')
    .replace('-', '');
  const postDate = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));

  return postDate >= yesterday;
};

const getHtml = async url => {
  const { data: html } = await axios.get(url);
  return html;
};

const sortData = data =>
  data.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));

module.exports = {
  checkDate,
  getHtml,
  sortData,
};
