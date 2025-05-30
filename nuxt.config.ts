// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  // devtools: { enabled: true },
  devServer: {
    port: 8080,
  },

  runtimeConfig: {
    dbURI: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET,

    public: {
      secretKey: process.env.Secret_Key,
    },
  },

  pages: true,

  css: ["~/assets/css/main.css"],

  modules: ["@vueuse/nuxt", "nuxt-aos", "@vite-pwa/nuxt"],

  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-center", // defines which position of the element regarding to window should trigger the animation
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: "senimentari blog",
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
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
        },
        {
          name: "description",
          content:
            "Blog artikel pribadi dari penulis Yuri Ostrovsky, berisi artikel, makalah, dan cerita pendek dari berbagai tema.",
        },
        {
          name: "keywords",
          content: "makalah, artikel, development, pendidikan, teknologi",
        },
        {
          name: "author",
          content: "Yuri S. Ostrovsky",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          property: "og:title",
          content: "senimentari blog",
        },
        {
          property: "og:description",
          content:
            "Blog artikel pribadi dari penulis Yuri Ostrovsky, berisi artikel, makalah, dan cerita pendek dari berbagai tema.",
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:url",
          content: "https://senimentari-blog.vercel.app/",
        },
        {
          property: "og:image",
          content: "https://senimentari-blog.vercel.app/images/logo-blog.webp",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "senimentari blo",
        },
        {
          name: "twitter:description",
          content:
            "Blog artikel pribadi dari penulis Yuri Ostrovsky, berisi artikel, makalah, dan cerita pendek dari berbagai tema.",
        },
        {
          name: "twitter:image",
          content: "https://senimentari-blog.vercel.app/images/logo-blog.webp",
        },
      ],
    },
  },

  pwa: {
    manifest: {
      name: "senimentari blog",
      short_name: "senimentari blog",
      theme_color: "#ffffff",
      description:
        "Blog artikel pribadi dari penulis Yuri Ostrovsky, berisi artikel, makalah, dan cerita pendek dari berbagai tema.",
      start_url: "/",
      icons: [
        {
          src: "image/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "image/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      importScripts: ["/sw.js"],
      globPatterns: ["**/*.{js,css,html,png,svg,jpg,woff2}"],
    },
    strategies: "injectManifest",
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
