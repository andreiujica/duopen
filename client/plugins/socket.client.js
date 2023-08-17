import { io } from 'socket.io-client';


export default defineNuxtPlugin(() => {
    const socket = io('http://localhost:8000');
    console.log("Socket.io plugin loaded");

    return {
        provide: {
            io: socket
        }
    }
});