const collabController = require('../controllers/collabController');

module.exports = (io) => {
  io.on('connection', (socket) => {
    collabController.handleSocketConnection(socket, io);
  });
};
