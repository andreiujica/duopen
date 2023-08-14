const logger = require('../utils/logger');

const sendMessage = (socket, io, data) => {
    try {
        socket.broadcast.to(data.room).emit('newMessage', data.message);
    } catch (error) {
        logger.error(`Error sending message: ${error.message}`);
        socket.emit('server-error', { message: 'An error occurred while sending the message.' });
    }
};

module.exports = {
    sendMessage
};
