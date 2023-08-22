import { defineStore } from 'pinia'
import { useUserStore } from './user';

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
      joinRoom(room) {
        const userStore = useUserStore();

        this.currentRoom = room;
        this.addParticipant(userStore.getUser);
      },
      leaveRoom() {
          this.currentRoom = null;
          this.participants = [];
      },
      setParticipants(participants) {
        this.participants = participants;
      },
      addParticipant(participant) {
        const isDuplicate = this.participants.some(p => 
            p.username === participant.username && p.avatarColor === participant.avatarColor
        );
    
        if (!isDuplicate) {
            this.participants.push(participant);
        }
      },
      removeParticipant(participant) {
        console.log("Removing participant: ", participant);
        console.log("Participants before: ", this.participants);

        const filtered = this.participants.filter(p => 
          !(p.username === participant.user.username && p.avatarColor === participant.user.avatarColor)
        );
        console.log(filtered)

        this.$patch({ participants: filtered });

        console.log("Participants after: ", this.participants);
    }
    
  }
  
});