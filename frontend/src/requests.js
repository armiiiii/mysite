// import 'dotenv/config';

export const connector = {
    getPosts: async () => {
        const res = await fetch(`
            http://localhost:4000/posts
        `);
        return await res.json();
    },
    getPostByID: async (id) => {
        const res = await fetch(`
            http://localhost:4000/posts/${id}
        `);
        return await res.json();
    },
};
