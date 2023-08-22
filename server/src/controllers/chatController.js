const logger = require('../utils/logger');

const sendMessage = (socket, io, data) => {
    try {
        logger.info(`Message sent in room ${data.room} by user ${data.user.username}: ${data.message}`);
        socket.broadcast.to(data.room).emit('newMessage', {message: data.message, user: data.user});
    } catch (error) {
        logger.error(`Error sending message: ${error.message}`);
        socket.emit('server-error', { message: 'An error occurred while sending the message.' });
    }
};

module.exports = {
    sendMessage
};
