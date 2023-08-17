const roomController = require('../controllers/roomController');

const roomEvents = (socket, io) => {
    socket.on('createRoom', (data, callback) => roomController.createRoom(socket, io, data, callback));
    socket.on('joinRoom', (data, callback) => roomController.joinRoom(socket, io, data, callback));
    socket.on('leaveRoom', (data) => roomController.leaveRoom(socket, io, data));
    socket.on('fetchUsersInRoom', (data, callback) => roomController.fetchUsersInRoom(socket, io, data, callback));
};

module.exports = roomEvents;

