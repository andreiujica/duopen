const logger = require('../utils/logger');

const updateDrawing = (socket, io, data) => {
    try {
        socket.broadcast.to(data.room).emit('drawingChanged', data.drawingData);
    } catch (error) {
        logger.error(`Error updating drawing: ${error.message}`);
        socket.emit('server-error', { message: 'An error occurred while updating the drawing.' });
    }
};

module.exports = {
    updateDrawing
};
