const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const { User } = require('./user.model');

const app = express();

app.use(cors());
app.use(json());

app.get('/user', async (req, res) => {
    const users = await User.find({});
    res.send({ success: true, result: users });
});

app.post('/user', async (req, res) => {
    const { name, email, avatar } = req.body;
    const user = new User({ name, email, avatar });
    await user.save();
    res.send({ success: true, result: user });
});

module.exports = { app };
