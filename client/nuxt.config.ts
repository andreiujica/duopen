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
  runtimeConfig: {
    public: {
      socketUrl: process.env.SOCKET_URL || 'http://localhost:8000',
    },
  },
  generate: {
    exclude: [
      /^\/runner/,
      /^\/join-room/,
      /^\/whiteboard/,
      /^\/editor/
    ]
  },
})
