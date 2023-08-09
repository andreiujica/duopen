const logger = require('../../config/logger');

function onLeaveRoom(socket) {
    socket.on('leave-room', (room, callback) => {
        logger.info(`User ${socket.id} left room ${room}`);
        socket.leave(room);
        callback(true);
    });
}

module.exports = onLeaveRoom;
