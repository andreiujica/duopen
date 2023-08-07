const onConnect = require('./events/onConnect');
const onCodeChange = require('./events/onCodeChange');
const onDisconnect = require('./events/onDisconnect');

module.exports = (io) => {
    io.on('connection', (socket) => {
        onConnect(socket);
        onCodeChange(socket);
        onDisconnect(socket);
    });
};
