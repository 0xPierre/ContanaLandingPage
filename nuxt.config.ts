// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', "@nuxtjs/plausible"],
  app: {
    head: {
      title: 'Contana - Logiciel de facturation',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content:
            'Contana est un logiciel de facturation, de comptabilité et de gestion de clients.'
        },
        {
          name: 'keywords',
          content:
            'facturation, comptabilité, logiciel, entreprise, gestion, factures, devis, acompotes, avoir, clients'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            primary: '#3C68CA',
            primaryDark: '#283046',
            body: '#272932',
            bodyDark: '#d0d2d6'
          }
        }
      }
    }
  },
  css: ['@/assets/style/css/main.css'],
  // @ts-ignore
  googleFonts: {
    families: {
      Montserrat: {
        wght: [400, 500, 600, 700]
      }
    }
  },
  plausible: {
    domain: 'contana.fr',
    apiHost: 'https://plausible.goubaud.com',
  }
})