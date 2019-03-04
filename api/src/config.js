module.exports = {
  server: {
    port: 8000,
    host: 'api',
    routes: { cors: { origin: ['*'] }, },
  },
  tmdbClient: {
    api_key: 'fc2c13a83d1c47c860d488303fe5e899',
  },
}