const redis = require('redis');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
let client;
if (process.env.REDIS_HOST) {
  client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
  
  client.on('connect', function() {
    console.log('Redis client connected');
  });
  
  client.on('error', function (err) {
    console.log('Something went wrong ' + err);
  });
} else {
  console.warn('no env for redis set, caching will be disabled');
}


async function get(key) {
  if (client) {
    const value = await client.getAsync(key);
    return JSON.parse(value);
  }

  return null;
}

function set(key, value) {
  if (client) {
    console.log(`setting cache for search query: ${key}`)
    client.set(key, JSON.stringify(value), 'EX', 10);
  }
}

module.exports = {
  get,
  set,
};
