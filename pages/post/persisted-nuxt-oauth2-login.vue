<script setup lang="ts">
import Navbar from "~/components/Navbar/Navbar.vue";
import Header from "~/components/Post/Header.vue";

useHead({
  meta: [
    {
      name: "description",
      content:
        "Pelajari cara mengintegrasikan skema OAuth2 dengan modul Nuxt/Auth untuk autentikasi aplikasi Anda. Panduan lengkap, jelas, dan mudah dipahami.",
    },
    {
      name: "keywords",
      content:
        "Nuxt Auth, OAuth2, cara menggunakan Nuxt Auth, skema OAuth2, autentikasi Nuxt, Nuxt.js tutorial, OAuth2 Nuxt/Auth, modul Nuxt Auth",
    },
    {
      property: "og:title",
      content:
        "Cara Menggunakan Skema OAuth2 dengan Modul Nuxt/Auth - Panduan Lengkap",
    },
    {
      property: "og:description",
      content:
        "Pelajari cara mengintegrasikan skema OAuth2 dengan modul Nuxt/Auth untuk autentikasi aplikasi Anda. Panduan lengkap, jelas, dan mudah dipahami.",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content:
        "https://senimentari-blog.vercel.app/post/persisted-nuxt-oauth2-login",
    },
    {
      property: "og:image",
      content: "https://senimentari-blog.vercel.app/images/nuxt-auth-logo.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content:
        "Cara Menggunakan Skema OAuth2 dengan Modul Nuxt/Auth - Panduan Lengkap",
    },
    {
      name: "twitter:description",
      content:
        "Pelajari cara mengintegrasikan skema OAuth2 dengan modul Nuxt/Auth untuk autentikasi aplikasi Anda. Panduan lengkap, jelas, dan mudah dipahami.",
    },
    {
      name: "twitter:image",
      content: "https://senimentari-blog.vercel.app/images/nuxt-auth-logo.png",
    },
  ],
});

const tags = ref<string[]>(["google", "oauth2", "nuxt/auth"]);
const date = ref<string>("Rabu, 25 Desember 2024");
const title = ref<string>(
  "Cara Mengguanakan Skema Oauth2 dengan Modul Nuxt/Auth"
);
const subTitle = ref<string>(
  "Bagaimana caranya agar status login tidak hilang saat browser ditutup"
);

const references = ref<string[]>([
  "https://github.com/nuxt-community/auth-module",
]);

const moreContent = ref<{ title: string; link: string }[]>([
  {
    title: "Cara Menggunakan Skema Refresh pada Nuxt Auth",
    link: "/post/refresh-token-scheme",
  },
]);
</script>

<template>
  <Navbar />
  <div
    id="persisted-nuxt-oauth2-login"
    class="w-full max-w-[900px] mx-auto flex flex-col gap-5 items-start pt-10 pb-10 px-4"
  >
    <PostTags :tags="tags" />
    <Header
      :title="title"
      :sub-title="subTitle"
      :date="date"
      image="/images/nuxt-auth-logo.png"
    />

    <p class="text-base text-justify">
      Pernahkah teman-teman mencoba membuat fitur autentikasi dengan Oauth2
      melalui library pihak ketiga? Apalagi, jika teman-teman bekerja dengan
      nuxt2 atau perusahaan tempat teman-teman bekerja menggunakan nuxt2.
      Teman-teman sangat mungkin menggunakan sebuah library bernama nuxt/auth.
      Library ini dapat membantu untuk menyajikan token dan user id dari
      provider oauth2 misalnya google.
    </p>
    <p class="text-base text-justify">
      Lantas, teman-teman mendapati aplikasi yang sedang teman-teman garap
      adalah aplikasi peninggalan programmer sebelumnya yang terlanjur me-setup
      nuxt.config.js pada skema login oauth2 strategi google dengan
      responseType: "token"
    </p>

    <pre
      class="w-full px-2 bg-white shadow-md dark:bg-dark-medium overflow-auto"
    >
      <code>
        google: {
        clientId:
          "*******",
        scope: ["profile", "email"],
        codeChallengeMethod: "",
        responseType: "token id_token", // Di sini, memakai token id
        scheme: "oauth2",
       
       
      },
    </code>
  </pre>
    <p class="text-base text-justify">
      Reponse type token pada library ini hanya mempertahankan login dengan
      google selama sesi user berlangsung. Setelah sesi berakhir atau user
      menutup browsernya, maka user akan otomatis logout. Ini tentunya akan
      menyebabkan ketidaknyamanan, dimana user harus bolak-balik ke halaman
      login untuk mengakses fitur yang mungkin dijaga oleh middleware auth.
      <br />
      Di sisi lain, aplikasi sudah terlalu besar untuk dirombak atau diganti
      responseType-nya menjadi code.
    </p>

    <p class="text-base text-justify">
      Teman-teman tidak perlu khawatir karena menjaga agar user tetap login
      meski telah keluar browser dapat di-setup secara manual.
    </p>

    <h3 class="font-bold">1. Memanfaatkan localStorage</h3>
    <p class="text-base text-justify">
      Cara paling mudah digunakan untuk menyimpan data user adalah melalui
      localStorage. Sehingga, setiap kali sesi user habis, kita tinggal cek
      apakah ada data valid di localStorage atau tidak. Jika ada, kembalikan
      sesi user.
    </p>
    <p class="text-base text-justify">
      Jadi, idenya adalah menyimpan data user hasil login ke localStorage.
      Kemudian, jika sesi user hilang, ambil kembali data yang sebelumnya
      disimpan di localStorage. Contohnya seperti ini.
    </p>
    <pre
      class="w-full px-2 bg-white shadow-md dark:bg-dark-medium overflow-auto"
    >
      <code>
    async loginGoogle() {
      try {
        let response = await this.$auth.loginWith("google", {
          params: { prompt: "select_account" },
        });

        if (response) {
          localStorage.setItem('storedUser', this.$auth.user);
        }
      } catch (err) {
        console.log(err);
      }
    },
    </code>
  </pre>

    <p class="text-base text-justify">
      Pada contoh kode di atas, saya memeriksa ketersediaan response. Apabila
      response ada, saya akan simpan this.$auth.user ke dalam localStorage.
      Mungkin teman-teman bertanya, mengapa $auth.user? Mengapa bukan response?
      Ini karena middleware auth dan segara proses yang dilakukan oleh modul
      nuxt/auth menggunakan $auth user. Jadi, lebih baik kita pastikan jika
      format data yang disimpan oleh localStorage memiliki format yang sama
      dengan yang disimpan oleh $auth.<br />
      Kita akan lihat korelasinya di bagian kedua.
    </p>

    <h3 class="font-bold">2. Set Informasi User</h3>
    <p class="text-base text-justify">
      Setelah data user disimpan di localStorage, kita ambil kembali data itu
      ketika user kembali membuka browser setelah menutupnya. <br />
      Jadi, idenya adalah ketika user masuk ke halaman tertentu yang perlu
      autentikasi, misalnya user detail, kita cek apakah ada data storedUser di
      dalam localStorage. Jika ada, beri tahu nuxt/auth untuk mengizinkannya
      masuk. Contoh implementasinya adalah seperti ini.
    </p>

    <pre
      class="w-full px-2 bg-white shadow-md dark:bg-dark-medium overflow-auto"
    >
      <code>
/**
 * This mixins was made because nuxt/auth can't save the login data
 * when user login with google
 */

export default {
  async created() {
    if (process.client) {
      if (this.$auth.user === null) {
        const storedUser = this.getStoredUserData();

        // If the stored user is exist in localStorage, set that user to $auth global variable
        if (storedUser) {
          await this.$auth.setUser(storedUser); // set the user info to $auth
          this.$auth.$storage.setState("loggedIn", true); // Set state login menjadi true

          // Jika teman-teman menggunakan BE, dapatkan token dari BE di sini

          localStorage.setItem('storedUser', this.$auth.user);
        }
      }
    }
  },

  methods: {
    getStoredUserData() {
      return JSON.parse(localStorage.getItem("storedUser"));
    },
  },
};

    </code>
  </pre>

    <p class="text-base text-justify">Mari kita bahas satu-satu.</p>
    <ul class="list-disc ml-5">
      <li>
        <span class="font-bold">Pemakaian Mixin</span>
        <p>
          Seperti yang teman-teman lihat, saya membuat kode untuk menangkap
          localStorage di mixin. Tujuannya adalah agar saya bisa memasang kode
          ini di semua page yang terdapat setting-an <br />
          <span class="font-bold">auth:true</span> atau <br />
          <span class="font-bold">middleware: 'auth'</span>
        </p>
      </li>
      <li>
        <span class="font-bold">Pemakaian kode hanya di sisi client</span>
        <p>
          localStorage hanya bisa diakses di sisi client. Di sisi server,
          seperti mana kemampuan nuxtjs untuk SSR, localStorage tidak tersedia.
        </p>
      </li>
    </ul>
    <p class="text-base text-justify">
      Kemudian, saya mengecek, apakah this.$auth.user adalah null. Ini untuk
      mencegah jika user sudah di-set ke dalam storage $auth, maka jangan di-set
      terus-terusan. Cukup sekali saja.
    </p>
    <p class="text-base text-justify">
      Jika null atau keadaan user sudah logout, saya cek apakah di dalam
      localStorage ada data storedUser. Jika ada, beritahu variable $auth bahwa
      user masih tersedia dengan
      <span class="font-bold">await this.$auth.setUser(storedUser);</span>
      Perlu di-await karena ia me-return promise.
    </p>
    <p class="text-base text-justify">
      Fungsi tersebut akan mengisi sebuah variable user di dalam vuex milik
      nuxt/auth.
    </p>
    <p class="text-base text-justify">
      Namun, langkah ini belum selesai. Perlu diketahui, bentuk dari store vuex
      milik nuxt/auth adalah seperti ini setelah saya me-setUserInfo:
    </p>

    <pre
      class="w-full px-2 bg-white shadow-md dark:bg-dark-medium overflow-auto"
    >
      <code>
user:{
email:"***@gmail.com"
email_verified:true
family_name:"***"
given_name:"****"
name:"***"
picture:"****"
sub:"****"}
loggedIn:false // Masih false
strategy:"local"
    </code>
  </pre>

    <p class="text-base text-justify">
      Bisa dilihat jika data bernama loggedIn masih false. Ini akan menyebabkan
      middleware auth menolah data user. Maka dari itu, perlu ubah nilainya
      menjadi true. <br />
      <span class="font-bold">
        this.$auth.$storage.setState("loggedIn", true);
      </span>
    </p>

    <p class="text-base text-justify">
      Bisa dilihat jika data bernama loggedIn masih false. Ini akan menyebabkan
      middleware auth menolah data user. Maka dari itu, perlu ubah nilainya
      menjadi true. <br />
      <span class="font-bold">
        this.$auth.$storage.setState("loggedIn", true);
      </span>
    </p>

    <h3 class="font-bold">3. Ambil Token dari BE (Opsional)</h3>
    <p class="text-base text-justify">
      Terakhir, jika teman-teman menggunakan layanan backend yang meminta token
      dari mereka sendiri, maka teman-teman bisa lakukan proses fetching setelah
      mengubah status loggedIn. Perlu diketahui, login dengan oauth2
      mengembalikan token yang secara otomatis diambil oleh $auth dan ditempel
      sebagai headers parameter pada penggunaan axios.
    </p>
    <p class="text-base text-justify">
      Demikian adalah cara mempertahankan status login user skema oauth2
      strategi google.
    </p>
  </div>

  <FooterPost :references="references" :more="moreContent" />
</template>

<style scoped></style>
