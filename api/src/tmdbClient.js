const axios = require('axios');
const querystring = require('query-string');

const clientConfig = require('./config').tmdbClient;

const URL_BASE = 'https://api.themoviedb.org/3';

const URLS = {
  MOST_POPULAR: `${URL_BASE}/movie/popular`,
  SEARCH: `${URL_BASE}/movie/search`,
};

function buildQueryString(query) {
  const builtQuery = { ...clientConfig, ...query };
  return querystring.stringify(builtQuery);
}

async function getMostPopular(query = {}) {
  const mostPopular = await axios.get(`${URLS.MOST_POPULAR}?${buildQueryString(query)}`);
  return mostPopular.data;
}

async function searchMovies(query) {
  const searchQuery = { include_adult: false, ...query };
  const searchResults = await axios.get(`${URLS.SEARCH}?${buildQueryString(searchQuery)}`);
  return searchResults.data;
}

module.exports = {
  getMostPopular,
  searchMovies,
};