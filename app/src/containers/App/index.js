if (process.env.NODE_ENV === 'production') {
  module.exports = require('./App.prod.js');
} else {
  module.exports = require('./App.dev.js');
}
