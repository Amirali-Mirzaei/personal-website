export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/variables.scss" as *;`
        }
      }
    }
  },
  app: {
    head: {
      meta: [
        {
          name: 'theme-color',
          content: '#00bfb3'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap'
        }
      ]
    }
  }
})
