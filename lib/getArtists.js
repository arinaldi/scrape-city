const axios = require('axios');

const getArtists = async () => {
  try {
    const { data } = await axios.get(process.env.PA_API);
    return data;
  } catch (err) {
    return [];
  }
};

module.exports = getArtists;
