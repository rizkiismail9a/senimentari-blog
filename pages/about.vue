<script setup lang="ts">
const linkContents = ref<{ href: string; title: string }[]>([
  {
    href: "problem-background",
    title: "coding-is-hard",
  },
  {
    href: "why-we-are-here",
    title: "why-we-are-here",
  },
  {
    href: "what-will-you-get",
    title: "what-will-you-get",
  },
  {
    href: "mission",
    title: "mission",
  },
  {
    href: "about-author",
    title: "about-author",
  },
]);

/**
 *
 * @param {string} target id of target element
 */
const scrollToView = (target: string) => {
  document.getElementById(target)?.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
};
</script>

<template>
  <Navbar :use-language="true" />
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
        # {{ $t(link.title) }}
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
              {{ $t("coding-is-hard") }} <span class="normal-case">😵‍💫</span>
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
            {{ $t("background") }}
          </p>
        </div>
      </section>

      <section
        id="why-we-are-here"
        class="flex flex-col gap-4 items-center bg-white dark:bg-dark-medium p-5 rounded-xl shadow-md"
      >
        <h2 class="text-[34px] font-extrabold" data-aos="fade-up">
          {{ $t("why-we-are-here") }} 🤔
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
            {{ $t("reason-of-web") }}
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
          {{ $t("what-will-you-get") }} 🔍
        </h2>

        <ul data-aos="fade-right" class="w-full">
          <li class="flex flex-col gap-2">
            <span class="font-bold">💡 {{ $t("practical-solution") }} </span>
            <span>
              {{ $t("practical-solution-text") }}
            </span>
          </li>
          <li class="flex flex-col gap-2">
            <span class="font-bold">⚙️ {{ $t("config-guide") }}</span>
            <span>
              {{ $t("config-guide-text") }}
            </span>
          </li>
        </ul>
      </section>

      <section
        id="mission"
        class="flex flex-col gap-4 items-center bg-white dark:bg-dark-medium p-5 rounded-xl shadow-md"
      >
        <h2 data-aos="fade-right" class="text-[34px] font-extrabold">
          {{ $t("our-mission") }} 🎯
        </h2>
        <p v-html="$t('our-mission-text')" data-aos="fade-left"></p>
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
      <h3 class="text-[30px] font-bold">{{ $t("about-author") }}</h3>
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
