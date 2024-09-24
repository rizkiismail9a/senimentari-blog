import { articleOneIndo } from "./articles/articleTest.locale";
import { articleTwoId } from "./articles/articleTwo.locale";
import { aboutPageId } from "./pages/about.locale";

export default {
  home: "Beranda",
  about: "Tentang Kami",
  "home-header": "Kumpulan Artikel",
  "home-header-desc":
    "Website ini menyajikan tips, trik, dan solusi inovatif untuk mengatasi masalah bug dan konfigurasi dalam pengembangan software. Didesain khusus untuk developer pemula yang ingin belajar lebih mudah dan efisien.",
  "search-placeholder": "cari judul atau tag artikel",
  ...aboutPageId,
  ...articleOneIndo,
  ...articleTwoId,
};
