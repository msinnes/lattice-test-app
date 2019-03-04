const tmdbClient = require('./tmdbClient');

module.exports = [
  {
    method: 'GET',
    path: '/popular',
    handler: async request => tmdbClient.getMostPopular(request.query),
  },
  {
    method: 'GET',
    path: '/search',
    handler: async request => tmdbClient.getSearchMovies(request.query),
  },
  {
    method: 'GET',
    path: '/movie/{id}',
    handler: request => tmdbClient.getMovie(request.params.id),
  },
];