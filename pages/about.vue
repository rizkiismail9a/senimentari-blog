<script setup lang="ts">
const linkContents = ref<{ href: string; title: string }[]>([
  {
    href: "problem-background",
    title: "# Ngoding Itu Susah",
  },
  {
    href: "why-we-are-here",
    title: "# Mengapa Website Ini Ada?",
  },
  {
    href: "what-will-you-get",
    title: "# Apa yang Akan Anda Temukan di Sini?",
  },
  {
    href: "mission",
    title: "# Misi Kami",
  },
  {
    href: "about-author",
    title: "# Tentang Penulis",
  },
]);

const scrollToView = (target: string) => {
  console.log(target);

  document.getElementById(target)?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
};
</script>

<template>
  <div class="flex gap-9 flex-row-reverse py-4">
    <div
      id="sidebar-right"
      class="md:flex h-full sticky top-[100px] flex-col gap-3 flex-1 hidden"
    >
      <span
        v-for="link in linkContents"
        @click="scrollToView(link.href)"
        :key="link.href"
        :href="link.href"
        class="italic font-semibold cursor-pointer"
      >
        {{ link.title }}
      </span>
    </div>
    <div id="about-content" class="flex flex-col gap-10 max-w-[900px]">
      <section
        id="problem-background"
        class="flex md:flex-row flex-col gap-4 items-center overflow-x-hidden bg-white dark:bg-dark-medium p-5 rounded-xl shadow-md"
      >
        <img
          title="Image by AltumCode in Unsplash"
          data-aos="fade-right"
          src="~/assets/images/code-about-2.webp"
          class="md:w-[300px] md:h-[500px] md:block hidden object-cover shadow-lg rounded-xl"
        />
        <div data-aos="fade-left" class="flex flex-col gap-8">
          <div>
            <h1 class="italic font-extrabold text-[36px]">
              "Ngoding itu susah" <span class="normal-case">😵‍💫</span>
            </h1>
            <span class="italic">~ Sandhika Galih - Dosen sejuta umat</span>
          </div>
          <img
            title="Image by AltumCode in Unsplash"
            data-aos="fade-right"
            src="~/assets/images/code-about-2.webp"
            class="w-[500px] h-[500px] md:hidden block object-cover shadow-lg rounded-xl"
          />
          <p class="text-base">
            Selama perjalanan saya dalam belajar pengembangan software, saya
            sering dihadapkan dengan berbagai masalah, mulai dari error, bug,
            hingga konfigurasi yang membingungkan. Sayangnya, sumber daya yang
            membahas solusi masalah-masalah tersebut seringkali sulit ditemukan,
            terutama dalam bahasa Indonesia. Pengalaman saya dalam mencari
            solusi untuk masalah seperti konfigurasi Nuxt Auth, penggunaan i18n,
            atau bahkan cara menggunakan class Tailwind secara dinamis sangat
            terbatas.
          </p>
        </div>
      </section>

      <section
        id="why-we-are-here"
        class="flex flex-col gap-4 items-center bg-white dark:bg-dark-medium p-5 rounded-xl shadow-md"
      >
        <h2 class="text-[34px] font-extrabold" data-aos="fade-up">
          Mengapa Website Ini Ada? 🤔
        </h2>
        <div class="flex md:flex-row flex-col gap-2 items-center">
          <div
            class="flex flex-col md:hidden items-end gap-2 h-[100%]"
            data-aos="fade-left"
          >
            <img
              title="Image by Annie Spratt in Unsplash"
              src="~/assets/images/annie-spratt.webp"
              class="w-full h-[150px] rounded-3xl object-cover object-bottom"
            />
            <div class="flex gap-1">
              <img
                title="Image by Annie Spratt in Unsplash"
                src="~/assets/images/annie-spratt-2.webp"
                class="h-[150px] w-[150px] rounded-3xl object-cover"
              />
              <img
                title="Image by ThisIsEngineering in Unsplash"
                src="~/assets/images/thisisengineering.webp"
                class="h-[150px] w-[150px] rounded-3xl object-cover"
              />
            </div>
          </div>
          <p class="md:w-[50%] flex-1" data-aos="fade-right">
            Website ini hadir untuk menjawab kebutuhan para developer pemula
            yang mungkin mengalami kesulitan yang sama seperti yang saya alami.
            Saya ingin berbagi pengalaman, tips, trik, dan solusi kreatif yang
            saya temukan selama belajar coding. Dengan tujuan memudahkan
            developer pemula dalam memahami dan menyelesaikan masalah yang
            sering ditemui, khususnya bagi mereka yang mencari panduan dalam
            bahasa Indonesia.
          </p>
          <div
            class="md:flex hidden items-end gap-2 h-[100%]"
            data-aos="fade-left"
          >
            <img
              title="Image by Annie Spratt in Unsplash"
              src="~/assets/images/annie-spratt.webp"
              class="h-full w-[150px] rounded-3xl object-cover"
            />
            <div class="flex flex-col gap-1">
              <img
                title="Image by Annie Spratt in Unsplash"
                src="~/assets/images/annie-spratt-2.webp"
                class="h-[150px] w-[150px] rounded-3xl object-cover"
              />
              <img
                title="Image by ThisIsEngineering in Unsplash"
                src="~/assets/images/thisisengineering.webp"
                class="h-[150px] w-[150px] rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="what-will-you-get"
        class="flex flex-col gap-4 items-center bg-white dark:bg-dark-medium p-5 rounded-xl shadow-md"
      >
        <h2 data-aos="fade-left" class="text-[34px] font-extrabold">
          Apa yang Akan Anda Temukan di Sini? 🔍
        </h2>

        <ul data-aos="fade-right">
          <li class="flex flex-col gap-2">
            <span class="font-bold">💡 Solusi Praktis </span>
            <span>
              Artikel-artikel yang membahas solusi langsung untuk bug dan error
              yang sering muncul dalam pengembangan software.
            </span>
          </li>
          <li class="flex flex-col gap-2">
            <span class="font-bold">⚙️ Panduan Konfigurasi </span>
            <span>
              Langkah-langkah detail untuk mengatur berbagai tool dan framework
              seperti Nuxt Auth dan i18n.
            </span>
          </li>
        </ul>
      </section>

      <section
        id="mission"
        class="flex flex-col gap-4 items-center bg-white dark:bg-dark-medium p-5 rounded-xl shadow-md"
      >
        <h2 data-aos="fade-right" class="text-[34px] font-extrabold">
          Misi Kami 🎯
        </h2>
        <p data-aos="fade-left">
          Misi saya adalah memberikan solusi yang tidak hanya praktis, tetapi
          juga mudah dipahami dan diterapkan, terutama bagi mereka yang baru
          mulai berkecimpung di dunia pengembangan software. Website ini
          dirancang untuk membantu Anda belajar lebih mudah dan efisien tanpa
          harus terjebak dalam masalah-masalah teknis yang membingungkan. <br />
          Jadi, tunggu apa lagi?
          <NuxtLink to="/" class="text-blue hover:underline"
            >Temukan solusi Anda sekarang!</NuxtLink
          >
        </p>
      </section>
    </div>
    <div class="h-full flex-1 hidden md:block" />
  </div>
  <footer class="mt-[50px] mx-auto max-w-[900px]">
    <hr class="bg-gray-500 h-1" />
    <section
      id="about-author"
      class="flex flex-col gap-4 items-center bg-white dark:bg-dark-medium p-5 rounded-xl shadow-md mt-3"
    >
      <h3 class="text-[30px] font-bold">Tentang Author</h3>
      <div class="flex gap-3">
        <div class="flex flex-col gap-4">
          <p>
            Rizki Ismail atau bernama pena Yuri Ostrovsky adalah seorang
            mahasiswa di Universitas Siber Asia dan pengembang software di PT
            Lindungi Bumi Nusantara.
          </p>

          <div class="flex gap-6">
            <a href="https://mr-ismail-page.vercel.app/about-me">
              <i class="fa-solid fa-globe text-xl cursor-pointer"></i>
            </a>
            <a href="https://github.com/rizkiismail9a">
              <i class="fa-brands fa-github text-xl cursor-pointer"></i>
            </a>
            <a
              href="https://www.instagram.com/senimentari_/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
            >
              <i class="fa-brands fa-instagram text-xl cursor-pointer"></i>
            </a>
          </div>
        </div>
        <img
          src="~/assets/images/smile.webp"
          alt="yuri ost"
          class="rounded-full w-[150px] h-[150px]"
        />
      </div>
    </section>
  </footer>
</template>
