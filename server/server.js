const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const routes = require('./src/routes');
const socketHandlers = require('./sockets');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: "http://localhost:3000", 
      methods: ["GET", "POST"], 
      credentials: true
    }
});

app.use(cors());

app.use('/', routes);

socketHandlers(io);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
