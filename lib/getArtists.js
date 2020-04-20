const axios = require('axios');

const getArtists = async () => {
  try {
    const { data } = await axios.get(process.env.PA_API);
    return data;
  } catch (err) {
    /* eslint-disable no-console */
    console.error('Error fetching artists:', err.message);
    return [];
  }
};

module.exports = getArtists;
