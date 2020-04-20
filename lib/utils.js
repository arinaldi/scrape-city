const axios = require('axios');

const checkDate = (lastPostDate) => {
  const postDate = parseInt(lastPostDate.split(' ')[4]);
  const yesterday = (new Date()).getDate() - 1;

  return postDate >= yesterday;
};

const getHtml = async (url) => {
  const { data: html } = await axios.get(url);
  return html;
};

module.exports = {
  checkDate,
  getHtml,
};
