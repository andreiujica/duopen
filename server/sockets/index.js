module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('User connected', socket.id);

        // Listen for 'code-change' event from clients
        socket.on('code-change', (data) => {
            // Broadcast the code change to all other clients except the sender
            console.log('code-change', data);
            socket.broadcast.emit('code-update', data);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected', socket.id);
        });
    });
};
