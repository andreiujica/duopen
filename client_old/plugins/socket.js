import io from 'socket.io-client'

export default ({ app }, inject) => {
  // Connect to server
  const socket = io('http://localhost:8000')

  // Inject the socket instance into the Nuxt app
  inject('socket', socket)
}
