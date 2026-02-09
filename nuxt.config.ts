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
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Audiowide&display=swap'
        }
      ]
    }
  },
   ssr: true,
    nitro: {
     preset: 'static',
      compatibilityDate: '2026-02-09'
  }
})
