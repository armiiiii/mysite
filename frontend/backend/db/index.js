import 'dotenv/config';
import { Sequelize } from "sequelize";
import { Post } from './Post.js';

const conn = new Sequelize(
    process.env.DATABASE_NAME, 
    process.env.DATABASE_USER, 
    process.env.DATABASE_PASSWORD, {
        dialect: process.env.DATABASE_DIALECT,
        host: process.env.DATABASE_HOST
});

const Posts = Post(conn);

export default {
    sequelize: conn, 
    posts: Posts
}