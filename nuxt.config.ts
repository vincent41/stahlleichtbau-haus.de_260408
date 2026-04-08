export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/sitemap'],
  site: {
    url: 'https://stahlleichtbau-haus.de',
    name: 'SWD-HAUS — Stahlleichtbau für Baufirmen'
  },
  sitemap: {
    xsl: false,
    exclude: ['/danke']
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700, 800, 900]
    },
    display: 'swap'
  },
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'Stahlleichtbau für Baufirmen in Deutschland — Konstruktionspakete | SWD-HAUS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // SEO Core
        { name: 'description', content: 'Fertige Konstruktionspakete für Baufirmen in Deutschland: CAD-Planung, Stahlleichtbau-Profile, Aufbaupläne und technischer Support. Rohbau in 3–5 Tagen. Jetzt Preisvorschlag anfordern.' },
        { name: 'robots', content: 'index, follow' },
        { rel: 'canonical', href: 'https://stahlleichtbau-haus.de' },
        // Geo-SEO
        { name: 'geo.region', content: 'DE-BW' },
        { name: 'geo.placename', content: 'Baden-Württemberg, Deutschland' },
        // TODO: Exakte Koordinaten eures Firmensitzes eintragen
        // { name: 'geo.position', content: '49.XXX;8.XXX' },
        // { name: 'ICBM', content: '49.XXX, 8.XXX' },
        { name: 'content-language', content: 'de-DE' },
        // Open Graph
        { property: 'og:title', content: 'Stahlleichtbau für Baufirmen — Konstruktionspakete von SWD-HAUS' },
        { property: 'og:description', content: 'CAD-Planung, Profile und Support als fertiges Paket. Rohbau in 3–5 Tagen. Für Baufirmen und Trockenbaubetriebe in Deutschland.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://stahlleichtbau-haus.de' },
        { property: 'og:image', content: 'https://stahlleichtbau-haus.de/img/fotos/stahlleichtbauweise-konstruktion.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Stahlleichtbau Rohbau — Außenansicht eines mehrgeschossigen Gebäudes von SWD-HAUS' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:site_name', content: 'SWD-HAUS — stahlleichtbau-haus.de' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Stahlleichtbau für Baufirmen — SWD-HAUS' },
        { name: 'twitter:description', content: 'Fertige Konstruktionspakete: CAD-Planung, Profile, Aufbaupläne und Support. Rohbau in 3–5 Tagen.' },
        { name: 'twitter:image', content: 'https://stahlleichtbau-haus.de/img/fotos/stahlleichtbauweise-konstruktion.jpg' },
        // Business keywords
        { name: 'keywords', content: 'Stahlleichtbau, Leichtstahlbau, Stahl-Leichtbauweise, Konstruktionspakete, CAD-Planung, Stahlprofile, kaltgeformte Profile, Trockenbau, Baufirmen, Trockenbaubetriebe, Rohbau, SWD-HAUS, Baden-Württemberg, Bayern, NRW, Hessen, Süddeutschland, Deutschland, Stahlleichtbau Anbieter, Stahlleichtbau Einstieg' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://stahlleichtbau-haus.de' },
        { rel: 'alternate', hreflang: 'de', href: 'https://stahlleichtbau-haus.de' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://stahlleichtbau-haus.de' }
      ]
    }
  }
})
