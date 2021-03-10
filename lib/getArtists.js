const axios = require('axios');

const getArtists = async () => {
  try {
    const { data } = await axios.get(process.env.PA_NEXT_API);
    return data.artists;
  } catch (err) {
    console.error('Error fetching artists:', err.message);
    return [];
  }
};

module.exports = getArtists;
