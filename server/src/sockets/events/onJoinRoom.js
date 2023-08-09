const logger = require('../../config/logger');

function onJoinRoom(socket, io) {
  socket.on('join-room', (roomCode, callback) => {
    const room = io.sockets.adapter.rooms.get(roomCode);
    if (room) {
      socket.join(roomCode);
      logger.info(`User joined room ${roomCode}`);
      callback(true); // Successfully joined room
    } else {
      logger.info(`User failed to join room ${roomCode}`);
      callback(false); // Room does not exist
    }
  });
}

module.exports = onJoinRoom;
