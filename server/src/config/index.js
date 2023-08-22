require('dotenv').config();

const config = {
    PORT: process.env.PORT || 8000,
    cors: {
        origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
};

module.exports = config;
