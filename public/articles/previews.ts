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
    path: "/post/refresh-token-scheme",
  },
  {
    id: "article-2",
    title: "Cara Membuat Tombol Custom Subscribe Notifikasi dengan OneSignal",
    image: {
      path: "onesignal-logo.jpg",
      alt: "onesignal",
      credit: "OneSignal Logo",
    },
    preview:
      "OneSignal adalah salah satu tools digital yang sering digunakan oleh web developer untuk menambahkan fitur push notifikasi pada website buatan mereka. Namun, bagaimana jika kita ingin membuat tombol subscribe kita sendiri atau menyingkirkan tombol bawaan OneSignal itu?",
    tags: ["notification", "onesignal"],
    path: "/post/custom-onesignal-button",
  },
  {
    id: "article-3",
    title:
      "Tips GIT: Cara Menghapus dan Mengembalikan Commit Spesifik Dengan Revert dan Cherry-Pick",
    image: {
      path: "cherry.jpg",
      alt: "cherry",
      credit: "Photy by Quaritsch Photography",
    },
    preview:
      "Pernahkan teman-teman mendapatkan kejadian seperti ini? Teman-teman membuat sebuah fitur yang sudah ready di development, tetapi suatu saat, teman-teman diminta menarik lagi fitur tersebut. Sayangnya, commit dari fitur itu sudah jauh sekali",
    tags: ["git", "version control"],
    path: "/post/git-revert-cherry-pick",
  },
]);
