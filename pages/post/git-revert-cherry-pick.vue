<script setup lang="ts">
useHead({
  meta: [
    {
      name: "description",
      content:
        "Pelajari cara menghapus dan mengembalikan commit spesifik di Git menggunakan perintah revert dan cherry-pick. Panduan praktis untuk mempermudah manajemen versi proyek Anda.",
    },
    {
      name: "keywords",
      content:
        "Git, revert, cherry-pick, tutorial git, menghapus commit, mengembalikan commit, tips git",
    },
    {
      property: "og:title",
      content: "Tips GIT: Cara Menghapus dan Mengembalikan Commit Spesifik",
    },
    {
      property: "og:description",
      content:
        "Panduan lengkap untuk menggunakan revert dan cherry-pick dalam menghapus dan mengembalikan commit spesifik di Git.",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content:
        "https://senimentari-blog.vercel.app/post/git-revert-cherry-pick",
    },
    {
      property: "og:image",
      content: "https://senimentari-blog.vercel.app/images/cherry.jpg",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Tips GIT: Cara Menghapus dan Mengembalikan Commit Spesifik",
    },
    {
      name: "twitter:description",
      content:
        "Pelajari cara menghapus dan mengembalikan commit spesifik di Git menggunakan perintah revert dan cherry-pick.",
    },
    {
      name: "twitter:image",
      content: "https://senimentari-blog.vercel.app/images/cherry.jpg",
    },
  ],
});

const tags = ref<string[]>(["git", "version control"]);
const references = ref<string[]>([
  "https://documentation.onesignal.com/docs/device-user-model-web-sdk-mapping",
  "https://www.geeksforgeeks.org/git-cherry-pick/",
  "https://betterprogramming.pub/git-cherry-pick-merge-only-the-selected-commits-in-git-cli-and-gui-99259de728e3",
]);
const moreContent = ref<{ title: string; link: string }[]>([
  {
    title: "Cara Menggunakan Skema Refresh pada Nuxt Auth",
    link: "/post/refresh-token-scheme",
  },
  {
    title: "Cara Membuat Tombol Subscribe Notifikasi dengan OneSignal",
    link: "/post/custom-onesignal-button",
  },
]);
</script>

<template>
  <div
    id="git-revert-cherry-pick"
    class="w-full max-w-[900px] mx-auto flex flex-col gap-5 items-start pt-10 pb-10 px-4"
  >
    <section id="tags" class="mx-auto">
      <span
        v-for="tag in tags"
        :key="tag"
        class="bg-green-500 text-white inline-block mr-1 py-1 px-3 rounded-lg text-xs w-fit"
      >
        {{ tag }}
      </span>
    </section>
    <section class="text-base text-gray-600 dark:text-gray-300 mx-auto">
      Selasa, 11 November 2024
    </section>
    <h1 class="font-extrabold text-4xl text-center">
      Tips GIT: Cara Menghapus dan Mengembalikan Commit Spesifik Dengan Revert
      dan Cherry-Pick
    </h1>
    <h2 class="text-center w-full">
      Mengambil versi code di masa lalu dengan git revert dan cherry-pick
    </h2>
    <img
      src="/images/cherry.jpg"
      alt="GIT Logo"
      class="w-[700px] rounded-sm mx-auto bg-white"
      title="Photy by Quaritsch Photography"
    />
    <p class="text-base text-justify">
      Pernahkan teman-teman mendapatkan keadaan dimana teman-teman membuat
      sebuah fitur yang sudah ready di development, tetapi suatu saat,
      teman-teman diminta menarik lagi fitur tersebut. Sayangnya, commit dari
      fitur itu sudah jauh sekali di belakang pembaharuan yang sudah teman-teman
      buat. Jika teman-teman menghapus fitur secara manual, itu akan memakan
      waktu dan berisiko merusak fitur yang lain atau “nyenggol” fitur yang
      sudah dibuat. Apa itu pernah terjadi? Atau justru sedang teman-teman
      alami?
    </p>
    <p class="text-base text-justify">
      Pada kejadian seperti itu, solusinya adalah dengan membatalkan commit git
      dari perubahan yang ingin ditarik. Jika commit itu masih satu HEAD di
      belakang, tentunya tinggal melakukan perintah:
    </p>
    <div
      class="w-full h-fit p-2 bg-white shadow-md dark:bg-dark-medium overflow-x-auto"
    >
      <code> git reset –soft HEAD~1 </code>
    </div>
    <p class="text-base text-justify">
      Namun, bagaimana jika commit-nya ada jauh di belakang? Contohnya seperti
      ini:
    </p>
    <img
      src="/images/git-revert-1.png"
      alt="commit info"
      class="w-[700px] rounded-sm mx-auto bg-white"
    />
    <p class="text-base text-justify">
      Berdasarakan grafik yang ditunjukkan Git Graph dari repositori saya,
      terdapat tujuh commit terakhir di branch dev. Kemudian, sebagai contoh,
      saya ingin menarik commit “add user json”, yang mana itu ada di belakang
      commit "add new helloWorld". Untuk melakukan itu, saya akan melakukan
      perintah:
    </p>
    <div
      class="w-full h-fit p-2 bg-white shadow-md dark:bg-dark-medium overflow-x-auto"
    >
      <code> git revert < commit hash > </code>
    </div>
    <p class="text-base text-justify">
      Commit hash adalah identifier unik yang diberikan oleh GIT setiap kali
      kita melakukan commit. Untuk mendapatkan commit hash, kita bisa melakukan
      perintah git log. Namun, dengan menggunakan Git Graph, saya tinggal
      mengklik commit target. Maka, informasi terkait commit tersebut, mulai
      dari commit hash, hingga file yang berubah akibat commit tersebut akan
      terlihat.
    </p>
    <img
      src="/images/add-user-json-commit.png"
      alt="commit status info"
      class="w-[700px] rounded-sm mx-auto bg-white"
    />
    <p class="text-base text-justify">
      Berdasarkan gambar di atas, commit hash dari commit "add user json" adalah
      c5a035ae7bff92d28867f729e0ac2259466a4a10. Maka, perintah yang harus
      ditulis di terminal adalah
    </p>
    <div
      class="w-full h-fit p-2 bg-white shadow-md dark:bg-dark-medium overflow-x-auto"
    >
      <code> git revert c5a035ae7bff92d28867f729e0ac2259466a4a10 </code>
    </div>
    <p class="text-base text-justify">
      Namun, di sini, saya tidak akan menggunakan terminal, tetapi saya akan
      memanfaatkan fitur bawaan Git Graph. Saya cukup klik kanan dari commit
      target. Maka akan muncul pilihan seperti ini
    </p>
    <img
      src="/images/git-graph-menu.png"
      alt="git graph menu"
      class="w-[300px] rounded-sm mx-auto"
    />
    <p class="text-base text-justify">
      Pilih revert, lalu klik Yes. Maka revert telah selesai dan commit baru
      berlabel revert akan dibuat. Sekarang, file user.json telah hilang dari
      source code.
    </p>
    <img
      src="/images/git-revert-done.png"
      alt="git graph commit"
      class="w-[700px] rounded-sm mx-auto"
    />
    <p class="text-base text-justify">
      Seperti yang teman-teman lihat, saya memiliki branch baru yakni
      backup-dev. Ini adalah backup code jikalau suatu waktu commit yang saya
      revert tadi diperlukan kembali. Apabila waktu itu datang atau teman-teman
      perlu mengembalikan commit yang tadi dibuang, kita hanya perlu melakukan
      <b>cherry pick</b>.
    </p>
    <p class="text-base text-justify">
      Saya akan kembali gunakan Git Graph. Klik kanan lagi pada commit yang tadi
      di-revert, BUKAN COMMIT REVERT, tetapi commit yang tadi di-revert, pada
      kasus ini, berarti commit "add user json" yang disebut di atas.
    </p>
    <img
      src="/images/cherry-pick-menu.png"
      alt="git graph menu"
      class="w-[300px] rounded-sm mx-auto"
    />
    <p class="text-base text-justify">
      Klik cherry pick, lalu klik Yes. Maka, file yang sebelumnya di-revert
      telah kembali.
    </p>
    <img
      src="/images/file-list.png"
      alt="git graph menu"
      class="w-[300px] rounded-sm mx-auto"
    />
    <p class="text-base text-justify">
      Jika teman-teman tidak menggunakan Git Graph, cukup jalankan perintah
    </p>
    <div
      class="w-full h-fit p-2 bg-white shadow-md dark:bg-dark-medium overflow-x-auto"
    >
      <code> git cherry-pick < commit hash > </code>
    </div>
    <p class="text-base text-justify">atau pada kasus ini</p>
    <div
      class="w-full h-fit p-2 bg-white shadow-md dark:bg-dark-medium overflow-x-auto"
    >
      <code> git cherry-pick c5a035ae7bff92d28867f729e0ac2259466a4a10</code>
    </div>

    <FooterPost :references="references" :more="moreContent" />
  </div>
</template>
