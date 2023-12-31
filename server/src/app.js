const http = require('http');
const cors = require('cors');
const express = require('express');
const socketIo = require('socket.io');
const logger = require('./utils/logger');
const errorHandler = require('./middleware/errorHandler');
const config = require('./config/index');

const chatEvents = require('./events/chatEvents');
const codeEvents = require('./events/codeEvents');
const whiteboardEvents = require('./events/whiteboardEvents');
const roomEvents = require('./events/roomEvents');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: config.cors.origin,
        methods: config.cors.methods
    }
});

io.on('connection', (socket) => {
    logger.info('New user connected');

    // Initialize events for this socket connection
    chatEvents(socket, io);
    codeEvents(socket, io);
    whiteboardEvents(socket, io);
    roomEvents(socket, io);

    socket.on('disconnect', () => {
        logger.info('User disconnected');
    });
});

// Middleware for error handling
app.use(errorHandler);

// Middleware for CORS
app.use(cors(config.cors));

server.listen(config.PORT, () => {
    logger.info(`Server is running on port ${config.PORT} with CORS_ORIGIN ${config.cors.origin}`);
});
