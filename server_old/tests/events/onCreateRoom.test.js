const { expect } = require('chai');
const { initializeSocketConnection, closeServerAndSocket } = require('./setup');

describe('onCreateRoom Event', () => {
    let clientSocket;

    before(async () => {
        clientSocket = await initializeSocketConnection();
    });

    after(async () => {
        await closeServerAndSocket(clientSocket);
    });

    it('should receive create-room event', (done) => {
        const sampleData = {
            room: 'sample room'
        };
    
        clientSocket.emit('create-room', sampleData, (roomCode) => {
            expect(roomCode).to.not.be.empty;
            done();
        });
    });
});
