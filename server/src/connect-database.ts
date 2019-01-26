import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export async function connectDatabase() {
    await mongoose.connect(getDatabaseUri(), { useMongoClient: true });
}

function getDatabaseUri() {
    const { NODE_ENV } = process.env;
    if (NODE_ENV === 'test') return 'mongodb://mongodb/testdb';
    if (NODE_ENV === 'docker') return 'mongodb://mongodb/mydb';
    if (NODE_ENV === 'local') return 'mongodb://localhost/mydb';
    return '';
}
