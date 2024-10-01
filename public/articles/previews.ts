import type { ArticlePreview } from "~/types/articlePreview.type";

export const articles = ref<ArticlePreview[]>([
  {
    id: "article-1",
    title: "Cara Menggunakan Skema Refresh pada Nuxt Auth",
    image: {
      path: "login.webp",
      alt: "login",
      credit: "Photo by Miguel Á. Padriñán",
    },
    preview:
      "Jika Anda bekerja dengan modul Nuxt Auth untuk penanganan alur skema autentikasi, mungkin Anda akan bertanya, bagaimana caranya menggunakan skema refresh token ini menggunakan Nuxt Auth, terutama jika Anda menggunakan server Backend sendiri atau dalam konteks Nuxt Auth ini disebut strategi login local",
    tags: ["middleware", "nuxt auth"],
  },
]);
