const io = require('socket.io-client');
const server = require('../../src/index');
const config = require('../../src/config/config');
const logger = require('../../src/config/logger');

function initializeSocketConnection() {
  return new Promise((resolve, reject) => {
    const clientSocket = io.connect(`http://localhost:${config.port}`, {
        transports: ['websocket']
    });
    
    clientSocket.on('connect', () => {
        logger.debug(`Socket connected for tests on id ${clientSocket.id}`);
        resolve(clientSocket);
    });
    
    clientSocket.on('connect_error', (err) => {
        logger.error('Socket connection error:', err);
        reject(err);
    });
  });
}

function closeServerAndSocket(clientSocket) {
  return new Promise((resolve, reject) => {
    if (clientSocket && clientSocket.connected) {
        clientSocket.disconnect();
    }
    
    if (server.listening) {
        server.close(resolve);
    } else {
        resolve();
    }
  });
}

module.exports = {
  initializeSocketConnection,
  closeServerAndSocket
};
