const codeRunnerService = require('../services/codeRunnerService');
const logger = require('../utils/logger');

const updateCode = (socket, io, data) => {
    try {
        const codeOutput = codeRunnerService.getCodeOutput(data);
        socket.broadcast.to(data.room).emit('codeChanged', codeOutput);
    } catch (error) {
        logger.error(`Error updating code: ${error.message}`);
        socket.emit('server-error', { message: 'An error occurred while updating the code.' });
    }
};

module.exports = {
    updateCode
};
