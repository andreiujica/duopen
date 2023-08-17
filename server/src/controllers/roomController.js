const logger = require('../utils/logger');
const { generateRoomCode } = require('../utils/room');

const createRoom = (socket, io, data) => {
    try {
        const roomCode = generateRoomCode();
        socket.join(roomCode);

        // Notify others about the new room
        io.emit('roomCreated', { roomName: data.roomName });
    } catch (error) {
        logger.error(`Error creating room: ${error.message}`);
        socket.emit('server-error', { message: 'An error occurred while creating the room.' });
    }
};

const joinRoom = (socket, io, data) => {
    try {
        // Logic to add a user to a room
        socket.join(data.roomName);

        // Notify others in the room that someone has joined
        socket.broadcast.to(data.roomName).emit('userJoined', { userName: data.userName });

    } catch (error) {
        logger.error(`Error joining room: ${error.message}`);
        socket.emit('server-error', { message: 'An error occurred while joining the room.' });
    }
};

const leaveRoom = (socket, io, data) => {
    try {
        // Logic to remove a user from a room
        socket.leave(data.roomName);

        // Notify others in the room that someone has left
        socket.broadcast.to(data.roomName).emit('userLeft', { userName: data.userName });

    } catch (error) {
        logger.error(`Error leaving room: ${error.message}`);
        socket.emit('server-error', { message: 'An error occurred while leaving the room.' });
    }
};

module.exports = {
    createRoom,
    joinRoom,
    leaveRoom
};
