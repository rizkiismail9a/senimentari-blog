// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  pages: true,
  css: ["~/assets/css/main.css"],
  modules: ["@vueuse/nuxt", "@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "id",
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
          integrity:
            "sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          name: "description",
          content:
            "Aplikasi penyaji tips, trik, dan solusi inovatif untuk mengatasi masalah bug dan konfigurasi dalam pengembangan software. Didesain khusus untuk developer pemula yang ingin belajar lebih mudah dan efisien.",
        },
        {
          name: "keywords",
          content:
            "javascript, website, developer, pemula, bug, error, cara, trik",
        },
        {
          name: "author",
          content: "Yuri S. Ostrovsky",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        // Jangan lupa og:meta nanti
      ],
    },
  },
});
