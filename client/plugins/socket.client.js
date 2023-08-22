import { io } from 'socket.io-client';


export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
    console.log(config.public.socketUrl);
    const socket = io(config.public.socketUrl);

    console.log("Socket.io plugin loaded");

    return {
        provide: {
            io: socket
        }
    }
});