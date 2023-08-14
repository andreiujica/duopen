const io = require('socket.io-client');
const { expect } = require('chai');
const server = require('../../src/index');
const config = require('../../src/config/config');

describe('onCodeChange Event', () => {
    let clientSocket;

    before((done) => {
        clientSocket = io.connect(`http://localhost:${config.port}`);
        clientSocket.on('connect', done);
        
    });

    after((done) => {
        if(clientSocket.connected) {
            clientSocket.disconnect();
        }
        server.close(done);
    });

    it('should receive code-update event', (done) => {
        const sampleData = {
            code: 'sample code',
            room: 'sample room'
        };

        clientSocket.emit('code-change', sampleData);

        clientSocket.on('code-update', (code) => {
            expect(code).to.equal(sampleData.code);
            done();
        });
    });
});
