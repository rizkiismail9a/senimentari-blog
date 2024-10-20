<script setup lang="ts">
useHead({
  meta: [
    {
      name: "description",
      content:
        "Panduan lengkap cara membuat tombol subscribe custom dengan onesignal.",
    },
    {
      name: "keywords",
      content:
        "notifikasi,notification,one signal,onesignal,push,custom,button",
    },
    {
      property: "og:title",
      content: "Membuat Custom Button Notification Onesignal",
    },
    {
      property: "og:description",
      content:
        "Panduan lengkap cara membuat tombol subscribe custom dengan onesignal.",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content:
        "https://senimentari-blog.vercel.app/post/custom-onesignal-button",
    },
    {
      property: "og:image",
      content: "https://senimentari-blog.vercel.app/images/onesignal-logo.jpg",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Membuat Custom Button Notification Onesignal",
    },
    {
      name: "twitter:description",
      content:
        "Tutorial lengkap cara membuat tombol subscribe custom dengan onesignal.",
    },
    {
      name: "twitter:image",
      content: "https://senimentari-blog.vercel.app/images/onesignal-logo.jpg",
    },
  ],
});

const tags = ref<string[]>(["notification", "onesignal"]);
const references = ref<string[]>([
  "https://documentation.onesignal.com/docs/device-user-model-web-sdk-mapping",
]);
const moreContente = ref<{ title: string; link: string }[]>([
  {
    title: "Cara Menggunakan Skema Refresh pada Nuxt Auth",
    link: "/post/refresh-token-scheme",
  },
]);
</script>

<template>
  <div
    id="detail-wrapper"
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
      Selasa, 20 Oktober 2024
    </section>
    <h1 class="font-extrabold text-4xl text-center">
      Cara Membuat Tombol Subscribe Notifikasi dengan OneSignal
    </h1>
    <h2 class="text-center w-full">
      Menyembunyikan tombol bawaan, membuat tombol baru
    </h2>
    <img
      src="/images/onesignal-logo.jpg"
      alt="onesignal"
      class="w-[700px] rounded-sm mx-auto"
    />
    <p class="text-base text-justify">
      OneSignal adalah salah satu tools digital yang sering digunakan oleh web
      developer untuk menambahkan fitur push notifikasi pada website buatan
      mereka. Agar mereka dapat dengan mudah memberitahu para pengguna aplikasi
      mereka jika ada fitur baru atau event tertentu.
    </p>
    <p class="text-base text-justify">
      Secara default, OneSignal sudah menambahkan tombol subscribe atau
      langganan bawaan mereka yang akan muncul secara otomatis saat kita
      menginstal plugin mereka pada aplikasi yang kita buat. Yaitu, sebuah
      tombol lonceng yang mengambang di sudut layar. Contohnya ada pada web
      <a href="https://lindungihutan.com" class="text-blue" target="_blank">
        lindungihutan.com
      </a>
      berikut ini.
    </p>
    <img
      src="/images/lh.webp"
      alt="lindungihutan"
      class="w-[700px] rounded-sm mx-auto"
    />
    <p class="text-base text-justify">
      Namun, bagaimana jika kita ingin membuat tombol subscribe kita sendiri
      atau menyingkirkan tombol bawaan OneSignal itu? Tentu saja bisa. Berikut
      ini adalah caranya.
    </p>
    <h3 class="w-full font-bold text-2xl">1. Konfigurasi OneSignal</h3>
    <p class="text-base w-full">
      Cara konfigurasi onesignal akan berbeda-beda, tergantung bahasa
      pemrograman yang Anda gunakan. Di sini, saya akan contohkan menggunakan
      Nuxt Js. Namun, yang pasti adalah Anda harus sudah punya API key dan appId
      dari website onesignal dan daftarkan url website Anda di sana.
    </p>
    <p class="text-base w-full">
      Pada nuxt.config.js, cari dimana Anda mengonfigurasi OneSignal.
    </p>
    <pre
      class="w-full p-2 bg-white shadow-md dark:bg-dark-medium overflow-x-auto"
    >
     <code>
  oneSignal: {
      cdn: true,
      init: {
        appId: “app-Id-anda”,
        allowLocalhostAsSecureOrigin: true, // true jika Anda ingin menjalankan di localhost
        notifyButton: {
          enable: false, // Set menjadi false agar tombol bawaan OneSignal hilang
        },
        promptOptions: {
          /* Customize your Subscription Prompt */
          slidedown: {
            enabled: true,
            autoPrompt: false, // Nonaktifkan prompt otomatis
            actionMessage:
              "Kami akan mengirimkan notifikasi saat ada konten baru",
            acceptButtonText: "Allow",
            cancelButtonText: "Cancel",
          },
        },
      },
    },
     </code>
    </pre>
    <p class="text-base w-full">
      Untuk mematikan tombol bawaan OneSignal, kita hanya perlu set field
      <strong>notifyButton: { enabled: false }</strong>, dengan demikian tombol
      OneSignal akan hilang.
    </p>
    <p class="text-base w-full">
      Setelah itu, kustomisasi prompt slide yang akan kita gunakan untuk
      pemanggilan API OneSignal. Kenapa itu perlu? Kita akan bahas di bagian
      berikutnya.
    </p>
    <h3 class="w-full font-bold text-2xl">2. Buat Fungsi Subscribe</h3>
    <p class="text-base w-full">
      Kembali saya contohkan menggunakan Nuxt Js, ini bisa Anda sesuaikan dengan
      bahasa pemrograman yang Anda gunakan. Misal, saya memiliki tombol seperti
      ini.
    </p>
    <pre
      class="w-full px-2 bg-white shadow-md dark:bg-dark-medium overflow-auto"
    >
      <code>
        &lt;button class="message" @click="subscribeNotification"&gt;
            Jangan lewatkan update terbaru kami! Subscribe, gratis!
        &lt;/button&gt;
    </code>
  </pre>
    <p class="text-base w-full">
      Saat tombol diklik, ia akan menjalankan fungsi subscribeNotification di
      bawah ini.
    </p>
    <pre
      class="w-full px-2 bg-white shadow-md dark:bg-dark-medium overflow-auto"
    >
      <code>
    /**
     * Subscribe to notification
     */
    async subscribeNotification () {
      await window.OneSignal.push(() => {
		 // Buka prompt perintah subscribe	
        window.OneSignal.showSlidedownPrompt();
      });


      this.isSubscribeStatusChange();
    },


    /**
     * Check for subscribtion status change
     */
    isSubscribeStatusChange() {
      window.OneSignal.on("subscriptionChange", (subscribed) => {
		// subscribed adalah bertipe data boolean
        if (subscribed) {
          // Jika subscribe berhasil, lakukan sesuatu
        }
      });
    },

    </code>
  </pre>
    <p class="text-base w-full">
      Fungsi subscribeNotification berguna untuk membuka prompt atau popup
      bawaan dari OneSignal yang sudah kita konfigurasi pada nuxt.config.js
      sebelumnya. Jika gagal, pastika ad blocker Anda nonaktif atau coba
      bersihkan cache terlebih dahulu. <br />
      Pada prompt tersebut, terdapat tombol Allow yang juga bisa Anda ubah
      labelnya sesuka hati. Saat, tombol Allow diklik, OneSignal akan melakukan
      request ke API mereka untuk menambahkan device user sebagai target push
      notifikasi.
    </p>
    <p class="text-base w-full">
      Mengapa harus menggunakan prompt? Ini karena API OneSignal hanya bisa
      dipanggil oleh element bawaan mereka. Anda bisa saja melakukan request API
      secara langsung dengan melakukan inspect element di browser, lalu ‘tembak’
      API yang berguna untuk subscribe di sana. Namun, secara pribadi saya belum
      pernah melakukannya. Mengingat, halaman dokumentasi di OneSignal yang
      mendukung cara ini telah dihapus.
    </p>
    <p class="text-base w-full">
      Anda juga bisa mengecek apakah user sebelumnya sudah pernah subscribe
      sebelumnya atau tidak dengan menggunakan fungsi berikut ini.
    </p>
    <pre
      class="w-full px-2 bg-white shadow-md dark:bg-dark-medium overflow-auto"
    >
      <code>   
    window.OneSignal.isPushNotificationsEnabled((isEnabled) => {
        /**
        *  isEnabled adalah bertipe data boolean
      	*/
        if (!isEnabled) {
          // Jika belum subscribed, lakukan sesuatu
        }
    });
    </code>
  </pre>
    <p class="text-base w-full">
      Demikian cara membuat tombol kustomisasi onesignal.
    </p>
  </div>
  <FooterPost :references="references" :more="moreContente" />
</template>

<style scoped></style>
