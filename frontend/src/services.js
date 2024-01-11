import axios from 'axios';

async function fetch(url) {
    const response = await axios.get(url);
    return response.data
};

const services = {
    async fetchPosts () {
        return await fetch(`http://localhost:8000/posts`);
    },
    async fetchById (id) {
        return await fetch(`http://localhost:8000/posts/${id}`);
    },
};

export default services;
