const axios = require('axios');
const querystring = require('query-string');

const clientConfig = require('./config').tmdbClient;
const redisClient = require('./redisClient');

const URL_BASE = 'https://api.themoviedb.org/3';

const URLS = {
  MOST_POPULAR: `${URL_BASE}/movie/popular`,
  MOVIE: `${URL_BASE}/movie`,
  SEARCH: `${URL_BASE}/search/movie`,
};

function buildQueryString(query = {}) {
  const builtQuery = { ...clientConfig, ...query };
  return querystring.stringify(builtQuery);
}

async function getMostPopular(query = {}) {
  const mostPopular = await axios.get(`${URLS.MOST_POPULAR}?${buildQueryString(query)}`);
  return mostPopular.data;
}

async function getMovie(id) {
  const movie = await axios.get(`${URLS.MOVIE}/${id}?${buildQueryString({ append_to_response: 'credits' })}`);
  return movie.data;

}

async function getSearchMovies(query) {
  const cachedValue = await redisClient.get(query.query);
  if (cachedValue) {
    console.log('returning cached value');
    return cachedValue;
  }
  const searchQuery = { include_adult: false, ...query };
  const searchResults = await axios.get(`${URLS.SEARCH}?${buildQueryString(searchQuery)}`);
  redisClient.set(query.query, searchResults.data);
  return searchResults.data;
}

module.exports = {
  getMostPopular,
  getMovie,
  getSearchMovies,
};