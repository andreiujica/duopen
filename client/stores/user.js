import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    username: null,
    avatarColor: null
  }),
  persist: true,
  actions: {
    setUser(username, avatarColor) {
      this.username = username;
      this.avatarColor = avatarColor;
    }
  }
});