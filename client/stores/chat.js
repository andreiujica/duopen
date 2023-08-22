import { defineStore } from 'pinia'

export const useChatStore = defineStore({
  id: 'chat',
  state: () => ({
    messages: [],
  }),
  getters: {
    getMessages() {
      return this.messages;
    }
  },
  persist: true,
  actions: {
    addMessage(message) {
        console.log("Adding message: ", message)
        const isDuplicate = this.messages.some(m => 
            m.user.username === message.user.username && m.message === message.message && m.user.avatarColor === message.user.avatarColor
        );
    
        if (!isDuplicate) {
            this.messages.push(message);
        }
    },
    clearMessages() {
        this.messages = [];
    },
    }
});