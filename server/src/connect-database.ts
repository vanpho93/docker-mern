import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export async function connectDatabase() {
    let isSuccess = false;
    let retry = 0;
    const databaseUri = getDatabaseUri();
    while (retry++ < 1000) {
        isSuccess = await mongoose.connect(databaseUri, { useMongoClient: true })
            .then(() => true)
            .catch(() => false);
        if (isSuccess) break;
        await sleep(3);
        console.log(`Retry connect to database. Time: ${retry}`);
    }
    if (isSuccess) return console.log(`Database connected at ${databaseUri}`);
    console.log('Cannot connect database ', databaseUri);
    process.exit(0);
}

function getDatabaseUri() {
    const { NODE_ENV } = process.env;
    if (NODE_ENV === 'test') return 'mongodb://mongodb/testdb';
    if (NODE_ENV === 'docker') return 'mongodb://mongodb/mydb';
    if (NODE_ENV === 'local') return 'mongodb://localhost/mydb';
    return '';
}

function sleep(seconds: number) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, seconds * 1000);
    });
}
