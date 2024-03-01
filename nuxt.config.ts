import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue', '@vueuse/nuxt', '@nuxtjs/tailwindcss'],
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, './presets/nicolas/') },
  },
})
