import { defineStore } from 'pinia'

export const useCodeStore = defineStore({
  id: 'code',
  state: () => ({
    code: {
        html: "",
        css: "",
        js: ""
    },
  }),
  getters: {
    getHtmlCode(state) {
      return state.code["html"];
    },
    getCssCode(state) {
      return state.code["css"];
    },
    getJsCode(state) {
      return state.code["js"];
    }
  },
  persist: true,
  actions: {
    setCode(code, lang) {
      this.code[lang] = code;
    },
    
  }
});