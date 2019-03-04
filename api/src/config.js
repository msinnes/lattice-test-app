module.exports = {
  server: {
    port: 8000,
    host: process.env.API_HOST || 'localhost',
    routes: { cors: { origin: ['*'] }, },
  },
  tmdbClient: {
    api_key: 'fc2c13a83d1c47c860d488303fe5e899',
  },
}