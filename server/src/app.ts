import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { User } from './user.model';

export const app = express();

app.use(express.static('public'));
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
