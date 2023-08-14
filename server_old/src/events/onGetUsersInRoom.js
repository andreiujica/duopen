function onGetUsersInRoom(socket, io) {
  socket.on('get-users-in-room', (room, callback) => {
    const roomSockets = io.sockets.adapter.rooms.get(room);
    if (roomSockets) {
      callback(Array.from(roomSockets));
    } else {
      callback([]);
    }
  });
}

module.exports = onGetUsersInRoom;
