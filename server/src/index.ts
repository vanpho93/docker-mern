import { connectDatabase } from './connect-database';
import { app } from './app';

async function start() {
    await connectDatabase();
    app.listen(3000, () => console.log('Server started!'));
}

start();
