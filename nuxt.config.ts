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
          content: '#adc7e9'
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
