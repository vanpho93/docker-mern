const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

async function connectDatabase() {
    await mongoose.connect('mongodb://mongodb/mydb', { useMongoClient: true });
}

module.exports = { connectDatabase };
