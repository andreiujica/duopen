const { expect } = require('chai');
const { initializeSocketConnection, closeServerAndSocket } = require('./setup');

describe('onJoinRoom Event', () => {
    let clientSocket;

    before(async () => {
        clientSocket = await initializeSocketConnection();
    });

    after(async () => {
        await closeServerAndSocket(clientSocket);
    });

    it('should receive join-room event', (done) => {
        const sampleData = {
            room: 'sample room'
        };
    
        clientSocket.emit('join-room', sampleData, (success) => {
            expect(success).to.equal(true);
            done();
        });
    });
});