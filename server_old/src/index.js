const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const collabRoutes = require('./routes/collabRoutes');
const config = require('./config/config');
const logger = require('./config/logger');
const socketConfig = require('./config/socket');

const app = express();
const httpServer = http.createServer(app);
const io = socketIo(httpServer, socketConfig);

// Initialize WebSocket routes
collabRoutes(io);

httpServer.listen(config.port, () => {
  logger.info(`CollabSocketService listening on port ${config.port}`);
});

module.exports = httpServer;