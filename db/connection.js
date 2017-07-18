var mongojs = require('mongojs');
var connectionString = process.env.MONGODB_URI || 'dispatcherdb';

module.exports = function (collections) {
    return mongojs(connectionString, collections);
};