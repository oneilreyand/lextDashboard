const redis = require('async-redis');
const client = redis.createClient({
  host: '127.0.0.1', // Sesuaikan dengan host Redis kamu
  port: 6379, // Sesuaikan dengan port Redis kamu
});

module.exports = {
  getAsync: client.get.bind(client),
  setAsync: client.set.bind(client),
  // Tambahkan fungsi lain yang diperlukan di sini
};
