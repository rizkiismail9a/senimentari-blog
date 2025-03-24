<script setup lang="ts">
import ConfirmPassKey from "~/components/Dialog/ConfirmPassKey.vue";
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
  title: "Cara Membuat Tombol Subscribe Notifikasi dengan OneSignal",
  tags: ["notification", "onesignal"],
  thumbnail: {
    src: "/images/onesignal-logo.jpg",
    credit: "",
  },
  references: [
    "https://documentation.onesignal.com/docs/device-user-model-web-sdk-mapping",
  ],
  slug: "custom-onesignal-button",
  subTitle: "Menyembunyikan tombol bawaan, membuat tombol baru",
  content: [
    {
      type: "paragraph",
      text: "OneSignal adalah salah satu tools digital yang sering digunakan oleh web developer untuk menambahkan fitur push notifikasi pada website buatan mereka. Agar mereka dapat dengan mudah memberitahu para pengguna aplikasi mereka jika ada fitur baru atau event tertentu.",
    },
    {
      type: "paragraph",
      text: " Secara default, OneSignal sudah menambahkan tombol subscribe atau langganan bawaan mereka yang akan muncul secara otomatis saat kita menginstal plugin mereka pada aplikasi yang kita buat. Yaitu, sebuah tombol lonceng yang mengambang di sudut layar. Contohnya ada pada web lindungihutan.com berikut ini.",
    },
    {
      type: "image",
      text: "<code>git reset –soft HEAD~1</code>",
    },
    {
      type: "paragraph",
      src: "/images/lh.webp",
      alt: "lindungihutan",
    },

    {
      type: "paragraph",
      text: " Namun, bagaimana jika kita ingin membuat tombol subscribe kita sendiri atau menyingkirkan tombol bawaan OneSignal itu? Tentu saja bisa. Berikut ini adalah caranya.",
    },

    {
      type: "sub-chapter",
      text: "1. Konfigurasi OneSignal",
    },

    {
      type: "paragraph",
      text: "Cara konfigurasi onesignal akan berbeda-beda, tergantung bahasa pemrograman yang Anda gunakan. Di sini, saya akan contohkan menggunakan Nuxt Js. Namun, yang pasti adalah Anda harus sudah punya API key dan appId dari website onesignal dan daftarkan url website Anda di sana.",
    },

    {
      type: "paragraph",
      text: "Pada nuxt.config.js, cari dimana Anda mengonfigurasi OneSignal.",
    },
    {
      type: "code",
      text: `<code>
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
     </code>`,
    },
    {
      type: "paragraph",
      text: "Untuk mematikan tombol bawaan OneSignal, kita hanya perlu set field notifyButton: { enabled: false }, dengan demikian tombol OneSignal akan hilang.",
    },

    {
      type: "paragraph",
      text: "Setelah itu, kustomisasi prompt slide yang akan kita gunakan untuk pemanggilan API OneSignal. Kenapa itu perlu? Kita akan bahas di bagian berikutnya.",
    },
    {
      type: "sub-chapter",
      text: "2. Buat Fungsi Subscribe",
    },

    {
      type: "paragraph",
      text: "Kembali saya contohkan menggunakan Nuxt Js, ini bisa Anda sesuaikan dengan bahasa pemrograman yang Anda gunakan. Misal, saya memiliki tombol seperti ini.",
    },

    {
      type: "code",
      text: `
      <code>
        &lt;button class="message" @click="subscribeNotification"&gt;
            Jangan lewatkan update terbaru kami! Subscribe, gratis!
        &lt;/button&gt;
      </code>`,
    },
    {
      type: "paragraph",
      text: "Saat tombol diklik, ia akan menjalankan fungsi subscribeNotification di bawah ini.",
    },
    {
      type: "code",
      text: `
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
      `,
    },
    {
      type: "paragraph",
      text: "Fungsi subscribeNotification berguna untuk membuka prompt atau popup bawaan dari OneSignal yang sudah kita konfigurasi pada nuxt.config.js sebelumnya. Jika gagal, pastika ad blocker Anda nonaktif atau coba bersihkan cache terlebih dahulu. Pada prompt tersebut, terdapat tombol Allow yang juga bisa Anda ubah labelnya sesuka hati. Saat, tombol Allow diklik, OneSignal akan melakukan request ke API mereka untuk menambahkan device user sebagai target push notifikasi.",
    },
    {
      type: "paragraph",
      text: "Mengapa harus menggunakan prompt? Ini karena API OneSignal hanya bisa dipanggil oleh element bawaan mereka. Anda bisa saja melakukan request API secara langsung dengan melakukan inspect element di browser, lalu ‘tembak’ API yang berguna untuk subscribe di sana. Namun, secara pribadi saya belum pernah melakukannya. Mengingat, halaman dokumentasi di OneSignal yang mendukung cara ini telah dihapus.",
    },
    {
      type: "paragraph",
      text: "Anda juga bisa mengecek apakah user sebelumnya sudah pernah subscribe sebelumnya atau tidak dengan menggunakan fungsi berikut ini.",
    },
    {
      type: "code",
      text: `
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
      `,
    },
    {
      type: "paragraph",
      text: "Demikian cara membuat tombol kustomisasi onesignal.",
    },
  ],
});
const openPasskeyDialog = ref<boolean>(true);

const saveArticles = async () => {
  try {
    const token = JSON.parse(sessionStorage.getItem("token") ?? "");

    await $fetch("/api/articles/create", {
      method: "POST",
      body: { ...oneArticle.value, token },
    });
  } catch (error) {
    console.error("gagal simpan artikel", error);
  }
};
</script>

<template>
  <ConfirmPassKey v-model:open="openPasskeyDialog" />

  <div v-if="!openPasskeyDialog">
    <button @click="saveArticles">Simpan Article</button>
  </div>
</template>

<style scoped></style>
