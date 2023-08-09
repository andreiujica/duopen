const logger = require('../../config/logger');

function onCodeChange(socket) {
  socket.on('code-change', (data) => {
    logger.info(`code-change ${data.code} in room ${data.room}`);
    socket.to(data.room).emit('code-update', data.code);
  });
}

module.exports = onCodeChange;
