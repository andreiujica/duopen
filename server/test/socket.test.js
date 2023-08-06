const ioClient = require('socket.io-client');
const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer);

const socketHandlers = require('../sockets');

describe("Socket Connection", () => {
    beforeAll((done) => {
        socketHandlers(io);
        httpServer.listen(() => {
            client = ioClient.connect(`http://localhost:${httpServer.address().port}`);
            client.on('connect', done);
        });
    });

    afterAll(() => {
        io.close();
        client.close();
    });

    it("should connect client and server", (done) => {
        expect(client.connected).toBeTruthy();
        done();
    });
});
