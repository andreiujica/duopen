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

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    logger.info('New user connected');

    // Initialize events for this socket connection
    chatEvents(socket, io);
    codeEvents(socket, io);
    whiteboardEvents(socket, io);

    socket.on('disconnect', () => {
        logger.info('User disconnected');
    });
});

// Middleware for error handling
app.use(errorHandler);

// Middleware for CORS
app.use(cors());

server.listen(config.PORT, () => {
    logger.info(`Server is running on port ${config.PORT}`);
});
