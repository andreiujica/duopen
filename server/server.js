const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const routes = require('./src/routes');
const socketHandlers = require('./sockets');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use('/', routes);

socketHandlers(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
