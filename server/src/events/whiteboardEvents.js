const whiteboardController = require('../controllers/whiteboardController');

const whiteboardEvents = (socket, io) => {
    socket.on('draw', data => whiteboardController.updateDrawing(socket, io, data));
};

module.exports = whiteboardEvents;
