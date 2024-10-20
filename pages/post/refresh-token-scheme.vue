<script setup lang="ts">
useHead({
  meta: [
    {
      name: "description",
      content:
        "Panduan lengkap cara menggunakan skema refresh token pada Nuxt Auth untuk memperpanjang sesi pengguna di aplikasi Nuxt.js.",
    },
    {
      name: "keywords",
      content:
        "nuxt auth, refresh token, nuxt.js, autentikasi, sesi pengguna, login, token",
    },
    {
      property: "og:title",
      content: "Panduan Refresh Token pada Nuxt Auth",
    },
    {
      property: "og:description",
      content:
        "Pelajari bagaimana mengimplementasikan refresh token pada Nuxt Auth untuk mempertahankan sesi pengguna tanpa perlu sering login.",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://senimentari-blog.vercel.app/post/refresh-token-scheme",
    },
    {
      property: "og:image",
      content: "https://senimentari-blog.vercel.app/images/login.webp",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Panduan Refresh Token pada Nuxt Auth",
    },
    {
      name: "twitter:description",
      content:
        "Tutorial tentang cara menggunakan refresh token dalam Nuxt Auth.",
    },
    {
      name: "twitter:image",
      content: "https://senimentari-blog.vercel.app/images/login.webp",
    },
  ],
});

const tags = ref<string[]>(["middleware", "nuxt auth"]);
const references = ref<string[]>([
  "https://www.wolfpack-digital.com/blogposts/nuxt-auth-refresh-token-authentication-in-your-nuxt-app",
  "https://auth.nuxtjs.org/schemes/refresh/",
]);
const moreContente = ref<{ title: string; link: string }[]>([
  {
    title: "Cara Membuat Tombol Subscribe Notifikasi dengan OneSignal",
    link: "/post/custom-onesignal-button",
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
      Selasa, 18 Oktober 2024
    </section>
    <h1 class="font-extrabold text-4xl text-center">
      Cara Menggunakan Skema Refresh pada Nuxt Auth
    </h1>
    <h2 class="text-center w-full">
      Skema refresh token untuk selalu memperbarui token user yang
      terautentikasi
    </h2>
    <img
      src="/images/login.webp"
      alt="login"
      title="Photo by Miguel Á. Padriñán"
      class="w-[700px] rounded-sm mx-auto"
    />
    <p class="text-base text-justify">
      Penggunaan token untuk autentikasi user yang sedang login adalah cara yang
      lumrah dan sering digunakan oleh banyak developer. Saya juga
      menggunakannya. Salah satu skema yang banyak dipakai adalah penggunaan dua
      token, yakni token akses dan token refresh.
    </p>
    <p class="text-base text-justify">
      Jika Anda bekerja dengan modul Nuxt Auth untuk penanganan alur skema
      autentikasi, mungkin Anda akan bertanya, bagaimana caranya menangani skema
      refresh token ini menggunakan Nuxt Auth? Terutama jika Anda menggunakan
      server Backend sendiri atau dalam konteks Nuxt Auth, ini disebut strategi
      <span class="italic">local</span>.
    </p>
    <p class="text-base w-full">Caranya cukup mudah.</p>

    <h3 class="w-full font-bold text-2xl">1. Konfigurasi nuxt.config.js</h3>
    <p class="text-base w-full">
      Buka konfigurasi Nuxt Js dan cari dimana Anda menyimpan konfigurasi
      variable auth. Contohnya seperti ini:
    </p>
    <pre
      class="w-full p-2 bg-white shadow-md dark:bg-dark-medium overflow-x-auto"
    >
   <code>
auth: {
    redirect: {
      login: "/login",
      logout: "/login",
      callback: "/login",
      home: "/user",
    },
    strategies: {
      local: {
        scheme: "refresh",
        token: {
          property: "access_token",
          global: true,
          required: true,
          type: "Bearer",
          storage: "cookie",
        },
        refreshToken: {
          property: "refresh_token_auth",
          data: "refresh_token",
        },
        user: {
          property: "user",
          autoFetch: true,
        },
        endpoints: {
          login: { url: "/api/login", method: "post" },
          logout: { url: "/api/logout", method: "delete" },
          user: { url: "/api/profile", method: "get" },
          refresh: { url: "/api/refreshToken", method: "post" },
        },
      },
      google: {
       // Tambah alur login dengan google jika perlu
      },
    },
  },
   </code>
    </pre>

    <p class="text-base text-justify">
      Anda hanya perlu menambahkan
      <code class="italic font-bold">scheme: "refresh"</code>, lalu field
      <strong>refreshToken</strong>, dan
      <strong>endpoint refresh token</strong> dari API Anda pada konfigurasi
      nuxt auth di nuxt config js.
    </p>

    <p class="text-base text-justify">
      Di sini, perlu diperhatikan nilai dari field properti harus sama dengan
      nama field response dari backend atau API yang Anda miliki, lalu nilai
      field data harus sama dengan nama payload atau parameter yang diminta
      server atau backend saat melakukan request.
    </p>
    <pre
      class="w-full p-2 bg-white shadow-md dark:bg-dark-medium overflow-auto"
    >
    <code>
 refreshToken: {
    property: "refresh_token_auth", // Samakan dengan nama properti dari BE baik saat login atau saat me-refresh
    data: "refresh_token", // Samakan dengan parameter yang diminta BE
 },
    </code>
    </pre>
    <p class="text-base text-justify">
      Misal, saya memiliki respons API seperti ini saat melakukan login.
    </p>
    <pre
      class="w-full px-2 bg-white shadow-md dark:bg-dark-medium overflow-auto"
    >
    <code>
 {
    oauth: {
        "access_token": your-token,
        "token_refresh_auth": your-refresh-token
    },
    user: {
        // Data user
    }
 },
    </code>
    </pre>

    <p class="text-base text-justify">
      Jadi, nilai dari property data pada field refreshToken di nuxt config,
      haruslah refresh_token_auth.
    </p>
    <p class="text-base text-justify">
      Kemudian, saat melakukan request post ke endpoint refresh, misal saya
      mendapatkan respons dari backend seperti ini.
    </p>

    <pre
      class="w-full px-2 bg-white shadow-md dark:bg-dark-medium overflow-auto"
    >
    <code>
 {
    access_token: your-token,
    token_refresh_auth: your-refresh-token
 },
    </code>
    </pre>
    <p class="text-base text-justify">
      Jadi, sebisa mungkin, nama field atau property respon dari server atau API
      Anda harus sama saat melakukan login dan me-refresh token.
    </p>
    <h3 class="w-full font-bold text-2xl">
      2. Set User dan Token setelah Login
    </h3>
    <p class="text-base text-justify">
      Berikutnya, setelah konfigurasi nuxt selesai, jangan lupa untuk simpan
      user dan token yang telah diterima dari API ke penyimpanan nuxt auth.
    </p>
    <p class="text-base text-justify">Berikut salah satu contoh fungsinya,</p>
    <pre
      class="w-full px-2 bg-white shadow-md dark:bg-dark-medium overflow-auto"
    >
      <code>
      async userLogin() {
          try {
            const { data } = await this.$auth.loginWith("local", {
              username: username-user,
              password: password-user
        });

        //**
        * $auth adalah variable yang otomatis dibuat oleh nuxt auth
        */
        this.$auth.setUserToken(
          data.oauth.access_token,
          data.oauth.token_refresh_auth
          );
          
          //**
          * Simpan data user yang dikembalikan oleh API saat login
          */
          this.$auth.setUser(data.user);
        } catch (e) {
          this.errorLogin = "Email atau Password tidak sesuai!";
        }
      },
    </code>
  </pre>

    <h3 class="w-full font-bold text-2xl">3. Terakhir, Buat Middleware</h3>

    <p class="text-base text-justify">
      Kali ini, saya ingin agar user mendapatkan token baru setiap kali user
      memuat ulang halaman atau masuk ke route tertentu. Untuk itu, kita cukup
      panggil method bawaan nuxt auth, yaitu
      <strong>$auth.refreshTokens()</strong>; <br />
      Di sini, saya memasangnya sebagai <span class="italic">middleware</span>.
    </p>

    <p class="text-base text-justify">
      Buat saja file baru di dalam folder middleware nuxt js. Misalnya, pada
      /middleware/refreshToken.js
    </p>

    <pre
      class="w-full px-2 bg-white shadow-md dark:bg-dark-medium overflow-auto"
    >
      <code>
      export default async function ({ $auth, store }) {
        // Cek, apakah ada user yang sudah login, jika ada buat token baru
        if ($auth.loggedIn) {
          const res = await $auth.refreshTokens();
          await $auth.setUserToken(res.data.access_token, res.data.refresh_token_auth);
          
        }
      }
      </code>
    </pre>

    <p class="text-base text-justify">
      Tinggal panggil saja di route yang diinginkan. Misal, di /pages/index.js
      <br />
      middleware: ['refreshToken']
      <br />
      Cobalah masuk ke halaman itu dan cek network apakah pemanggilan API ke
      refreshToken berhasil.
    </p>
    <p class="text-base text-justify">
      Demikian, cara menerapkan skema refresh token dengan strategi lokal
      menggunakan nuxt auth.
    </p>
  </div>
  <FooterPost :references="references" :more="moreContente" />
</template>
