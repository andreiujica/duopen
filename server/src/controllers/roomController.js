const logger = require('../utils/logger');
const { generateRoomCode } = require('../utils/rooms');

const createRoom = (socket, io, data, callback) => {
    try {
        const roomCode = generateRoomCode();
        socket.user = data.user;
        socket.join(roomCode);
        logger.info(`[ROOM] ${data.user.username} created room: ${roomCode}`);

        // Send the room code back to the client
        callback(roomCode)
    } catch (error) {
        logger.error(`[ROOM] Error creating room: ${error.message}`);
        socket.emit('server-error', { message: 'An error occurred while creating the room.' });
    }
};

const joinRoom = (socket, io, data, callback) => {
    try {
        // Logic to add a user to a room
        socket.user = data.user;
        socket.join(data.roomCode);
        logger.info(`[ROOM] ${data.user.username} joined room: ${data.roomCode}`)

        // Notify others in the room that someone has joined
        socket.broadcast.to(data.roomCode).emit('userJoined', { username: data.user.username, avatarColor: data.user.avatarColor });

        callback(true);
    } catch (error) {
        logger.error(`Error joining room: ${error.message}`);
        socket.emit('server-error', { message: 'An error occurred while joining the room.' });
        callback(false);
    }
};


const leaveRoom = (socket, io, data) => {
    try {
        // Logic to remove a user from a room
        socket.leave(data.roomCode);
        logger.info(`[ROOM] User ${data.user.username} left room: ${data.roomCode}`);

        // Notify others in the room that someone has left
        logger.info(`[ROOM] Notifying others in room ${data.roomCode} that ${data.user.username} has left`);
        socket.broadcast.to(data.roomCode).emit('userLeft', { user: socket.user });

    } catch (error) {
        logger.error(`Error leaving room: ${error.message}`);
        socket.emit('server-error', { message: 'An error occurred while leaving the room.' });
    }
};

const fetchUsersInRoom = (socket, io, data, callback) => {
    try {
        const room = io.sockets.adapter.rooms.get(data.roomCode);
        if (room) {
            const users = [];
            room.forEach((socketId) => {
                const userSocket = io.sockets.sockets.get(socketId);
                if (userSocket && userSocket.user) {
                    users.push({ username: userSocket.user.username, avatarColor: userSocket.user.avatarColor });
                }
            });
            callback(users);
        } else {
            callback([]);
        }
    } catch (error) {
        logger.error(`Error fetching users in room: ${error.message}`);
        socket.emit('server-error', { message: 'An error occurred while fetching users in the room.' });
    }
};


module.exports = {
    createRoom,
    joinRoom,
    leaveRoom,
    fetchUsersInRoom
};
