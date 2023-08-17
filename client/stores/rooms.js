import { defineStore } from 'pinia'
import { useUserStore } from './user';
import { useSSRContext } from 'nuxt/dist/app/compat/capi';

export const useRoomsStore = defineStore({
    id: 'rooms',
    state: () => ({
      currentRoom: null,
      participants: []
    }),
    getters: {
      getCurrentRoom() {
        return this.currentRoom;
      },
      getParticipants() {
        return this.participants;
      }
    },
    persist: true,
    actions: {
      createRoom() {
          const { $nuxtSocket } = useSSRContext();
          $nuxtSocket.emit('createRoom');
  
          // Listen for a response from the server after creating a room
          this.$nuxtSocket.once('roomCreated', (room) => {
              this.currentRoom = room;
              this.participants.push(useUserStore().getUser());
          });
      },
      joinRoom(room) {
          this.currentRoom = room;
          $socket.emit('joinRoom', room);
  
          // Listen for events when someone joins or leaves the room
          socket.on('userJoined', (participant) => {
              this.addParticipant(participant);
          });
  
          socket.on('userLeft', (participant) => {
              this.removeParticipant(participant);
          });
      },
      addParticipant(participant) {
          this.participants.push(participant);
      },
      removeParticipant(participant) {
          this.participants = this.participants.filter(p => p.id !== participant.id);
      },
      leaveRoom() {
          if (this.currentRoom) {
              socket.emit('leaveRoom', this.currentRoom);
          }
          this.currentRoom = null;
          this.participants = [];
      }
  }
  
});