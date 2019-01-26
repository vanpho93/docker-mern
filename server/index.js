const { connectDatabase } = require('./connect-database');
const { app } = require('./app');

async function start() {
    await connectDatabase();
    app.listen(3000, () => console.log('Server started!'));
}

start();
