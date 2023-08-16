import { defineStore } from 'pinia';

export const useTabStore = defineStore({
  id: 'tabStore',
  
  state: () => ({
    currentTab: "Code Editor",
  }),

  actions: {
    setCurrentTab(tabLabel) {
      this.currentTab = tabLabel;
    }
  }
});
