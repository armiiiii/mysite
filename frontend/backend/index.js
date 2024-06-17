import 'dotenv/config';
import db from './db/index.js';

import express from 'express';
import cors from 'cors';

const Post = db.posts;
const app = express();

const corsOptions = {
    origin: `http://${process.env.FRONTEND_HOST}:${process.env.FRONTEND_PORT}`,
}

app.use(cors(corsOptions))

app.get('/posts', async (req, res) => {
    res.send(JSON.stringify(await Post.findAll()))
});

app.get('/posts/:id', async (req, res) => {
    res.send(JSON.stringify(await Post.findAll({
        where: {id: req.params.id}
    })))
})

app.post('/posts', async (req, res) => {
    const text = req.params.text;
    const label = req.params.label;
    Post.create({text: text, label: label});
    console.log('Success');
});


app.listen(process.env.BACKEND_PORT);
