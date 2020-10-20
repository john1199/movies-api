require('dotenv').config();
function cacheResponse(res, seconds) {
  //process.env.NODE_ENV
  if (process.env.NODE_ENV.trim() === 'production') {
    res.set('Cache-Control', `public, max-age=${seconds}`);
  }
}

module.exports = cacheResponse;
