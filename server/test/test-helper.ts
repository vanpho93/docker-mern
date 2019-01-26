import { connectDatabase } from '../src/connect-database';

before(async () => {
    await connectDatabase();
});
