// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxthq/ui',
    ['@pinia/nuxt', 
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      }
    ],
    '@pinia-plugin-persistedstate/nuxt',
  ],
  imports: {
    dirs: [ 'stores' ],
  },
})
