const roomController = require('../controllers/roomController');

const roomEvents = (socket, io) => {
    socket.on('createRoom', (data) => roomController.createRoom(socket, io, data));
    socket.on('joinRoom', (data) => roomController.joinRoom(socket, io, data));
    socket.on('leaveRoom', (data) => roomController.leaveRoom(socket, io, data));
};

module.exports = roomEvents;

