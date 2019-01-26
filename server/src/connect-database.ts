import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

export async function connectDatabase() {
    await mongoose.connect('mongodb://mongodb/mydb', { useMongoClient: true });
}
