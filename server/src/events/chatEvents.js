const chatController = require('../controllers/chatController');

const chatEvents = (socket, io) => {
    socket.on('sendMessage', data => chatController.sendMessage(socket, io, data));
};

module.exports = chatEvents;
