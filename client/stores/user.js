import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    username: null,
    avatarColor: null
  }),
  persist: true,
  getters: {
    getUserIsLoggedIn() {
      return this.username && this.avatarColor;
    },
    getUser() {
      return {
        username: this.username,
        avatarColor: this.avatarColor
      };
    }
  },
  actions: {
    setUser(username, avatarColor) {
      this.username = username;
      this.avatarColor = avatarColor;
    },
    clearUser() {
      this.username = null;
      this.avatarColor = null;
    }
  }
});
