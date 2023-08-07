const { generateRoomCode } = require('../../utils/room');
const logger = require('../../config/logger');

function onCreateRoom(socket) {
    socket.on('create-room', (data, callback) => {
        const roomCode = generateRoomCode();
        socket.join(roomCode); // This makes the user join the room they've created.
        logger.info(`User created room ${roomCode}`);
        callback(roomCode); // Send the room code back to the client.
    });
}

module.exports = onCreateRoom;
