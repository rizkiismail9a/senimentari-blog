<script setup lang="ts">
import type { ArticlePost } from "~/types/articles.type";

useHead({
  meta: [
    {
      hid: "robots",
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});

const oneArticle = ref<ArticlePost>({
  title:
    "Tips GIT: Cara Menghapus dan Mengembalikan Commit Spesifik Dengan Revert dan Cherry-Pick",
  tags: ["git", "version control"],
  thumbnail: "/images/cherry.jpg",
  slug: "git-revert-cherry-pick",
  subTitle:
    "Mengambil versi code di masa lalu dengan git revert dan cherry-pick",
  content: [
    {
      type: "paragraph",
      text: "Pernahkan teman-teman mendapatkan keadaan dimana teman-teman membuat sebuah fitur yang sudah ready di development, tetapi suatu saat, teman-teman diminta menarik lagi fitur tersebut. Sayangnya, commit dari fitur itu sudah jauh sekali di belakang pembaharuan yang sudah teman-teman buat. Jika teman-teman menghapus fitur secara manual, itu akan memakan waktu dan berisiko merusak fitur yang lain atau “nyenggol” fitur yang sudah dibuat. Apa itu pernah terjadi? Atau justru sedang teman-teman alami?",
    },
    {
      type: "paragraph",
      text: "Pada kejadian seperti itu, solusinya adalah dengan membatalkan commit git dari perubahan yang ingin ditarik. Jika commit itu masih satu HEAD di belakang, tentunya tinggal melakukan perintah:",
    },
    {
      type: "code",
      text: "git reset –soft HEAD~1",
    },
    {
      type: "paragraph",
      text: "Namun, bagaimana jika commit-nya ada jauh di belakang? Contohnya seperti ini:",
    },
    {
      type: "image",
      src: "/images/git-revert-1.png",
      alt: "commit info",
    },
    {
      type: "paragraph",
      text: 'Berdasarakan grafik yang ditunjukkan Git Graph dari repositori saya, terdapat tujuh commit terakhir di branch dev. Kemudian, sebagai contoh, saya ingin menarik commit “add user json”, yang mana itu ada di belakang commit "add new helloWorld". Untuk melakukan itu, saya akan melakukan perintah:',
    },
    {
      type: "code",
      text: "git reset –soft HEAD~1",
    },
    {
      type: "paragraph",
      text: " Commit hash adalah identifier unik yang diberikan oleh GIT setiap kali kita melakukan commit. Untuk mendapatkan commit hash,kita bisa melakukan perintah git log. Namun, dengan menggunakan Git Graph, saya tinggal mengklik commit target. Maka, informasi terkait commit tersebut, mulai dari commit hash, hingga file yang berubah akibat commit tersebut akan terlihat.",
    },
    {
      type: "image",
      src: "/images/add-user-json-commit.png",
      alt: "commit info",
    },
    {
      type: "paragraph",
      text: 'Berdasarkan gambar di atas, commit hash dari commit "add user json" adalah c5a035ae7bff92d28867f729e0ac2259466a4a10. Maka, perintah yang harus ditulis di terminal adalah',
    },
    {
      type: "code",
      text: "git revert c5a035ae7bff92d28867f729e0ac2259466a4a10",
    },
    {
      type: "paragraph",
      text: "Namun, di sini, saya tidak akan menggunakan terminal, tetapi saya akan memanfaatkan fitur bawaan Git Graph. Saya cukup klik kanan dari commit target. Maka akan muncul pilihan seperti ini",
    },
    {
      type: "image",
      src: "/images/git-graph-menu.png",
      alt: "git graph menu",
    },
    {
      type: "paragraph",
      text: "Pilih revert, lalu klik Yes. Maka revert telah selesai dan commit baru berlabel revert akan dibuat. Sekarang, file user.json telah hilang dari source code.",
    },
    {
      type: "image",
      src: "/images/git-revert-done.png",
      alt: "git graph commit",
    },
    {
      type: "paragraph",
      text: "Seperti yang teman-teman lihat, saya memiliki branch baru yakni backup-dev. Ini adalah backup code jikalau suatu waktu commit yang saya revert tadi diperlukan kembali. Apabila waktu itu datang atau teman-teman perlu mengembalikan commit yang tadi dibuang, kita hanya perlu melakukan *cherry pick*",
    },
    {
      type: "paragraph",
      text: 'Saya akan kembali gunakan Git Graph. Klik kanan lagi pada commit yang tadi di-revert, BUKAN COMMIT REVERT, tetapi commit yang tadi di-revert, pada kasus ini, berarti commit "add user json" yang disebut di atas.',
    },
    {
      type: "image",
      src: "/images/cherry-pick-menu.png",
      alt: "git graph menu",
    },
    {
      type: "paragraph",
      text: "Klik cherry pick, lalu klik Yes. Maka, file yang sebelumnya di-revert telah kembali.",
    },
    {
      type: "image",
      src: "/images/file-list.png",
      alt: "git graph menu",
    },
    {
      type: "paragraph",
      text: "Jika teman-teman tidak menggunakan Git Graph, cukup jalankan perintah",
    },
    {
      type: "code",
      text: "git cherry-pick < commit hash >",
    },
    {
      type: "paragraph",
      text: "atau pada kasus ini",
    },
    {
      type: "code",
      text: "git cherry-pick c5a035ae7bff92d28867f729e0ac2259466a4a10",
    },
  ],
});

const saveArticles = async () => {
  try {
    await $fetch("/api/articles/create", {
      method: "POST",
      body: oneArticle.value,
    });
  } catch (error) {
    console.error("gagal simpan artikel", error);
  }
};
</script>

<template>
  <div>
    <button @click="saveArticles">Simpan Article</button>
  </div>
</template>

<style scoped></style>
