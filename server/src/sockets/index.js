const logger = require('../utils/logger');
const onConnect = require('./socketEvents/onConnect');
const onCodeChange = require('./socketEvents/onCodeChange');
const onDisconnect = require('./socketEvents/onDisconnect');

module.exports = (io) => {
    io.on('connection', (socket) => {
        onConnect(socket);
        onCodeChange(socket);
        onDisconnect(socket);
    });
};
