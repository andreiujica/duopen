const onConnect = require('./events/onConnect');
const onCodeChange = require('./events/onCodeChange');
const onDisconnect = require('./events/onDisconnect');
const onCreateRoom = require('./events/onCreateRoom');
const onJoinRoom = require('./events/onJoinRoom');

module.exports = (io) => {
    io.on('connection', (socket) => {
        onConnect(socket);
        onCodeChange(socket);
        onDisconnect(socket);
        onCreateRoom(socket);
        onJoinRoom(socket, io);
    });
};
