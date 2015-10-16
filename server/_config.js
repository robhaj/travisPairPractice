//config file for mongo

var config = {};

config.mongoURI = {
  test: 'mongodb://localhost/travis-test',
  development: 'mongodb://localhost/travis'
};

module.exports = config;
