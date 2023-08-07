import io from 'socket.io-client';

export default ({ app }, inject) => {
  // Connect to your server
  const socket = io('http://localhost:8000'); // adjust the URL to your server

  // Inject the socket instance into the Nuxt app
  inject('socket', socket);
}
