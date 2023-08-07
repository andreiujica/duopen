const logger = require('../../config/logger');

function onCodeChange(socket) {
    socket.on('code-change', (data) => {
        logger.info(`code-change ${data}`);
        socket.broadcast.emit('code-update', data);
    });
}

module.exports = onCodeChange;
