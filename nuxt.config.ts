export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint'
  ],
  eslint: {
    checker: true,
    config: {  
      standalone: false,
    },
  },
})