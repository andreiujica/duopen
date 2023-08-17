const codeRunnerService = require('../services/codeRunnerService');
const logger = require('../utils/logger');

const updateCode = (socket, io, data) => {
    try {
        const codeOutput = codeRunnerService.getCodeOutput(data);
        logger.info(`Code updated in room ${data.room} ${data.code}`);
        socket.broadcast.to(data.room).emit('codeChanged', { code: data.code, lang: data.lang});
    } catch (error) {
        logger.error(`Error updating code: ${error.message}`);
        socket.emit('server-error', { message: 'An error occurred while updating the code.' });
    }
};

module.exports = {
    updateCode
};
