import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue', '@vueuse/nuxt'],
  primevue: {
    options: {
      unstyled: true,
    },
    importPT: { from: path.resolve(__dirname, './presets/nicolas/') },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
