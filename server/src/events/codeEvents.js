const codeController = require('../controllers/codeController');

const codeEvents = (socket, io) => {
    socket.on('codeUpdate', data => codeController.updateCode(socket, io, data));
};

module.exports = codeEvents;
