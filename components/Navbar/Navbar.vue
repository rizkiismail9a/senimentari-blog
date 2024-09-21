<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
const { setLocale } = useI18n();
const showLangOption = ref<boolean>(false);
const toggleLangOpttion = useToggle(showLangOption);
const showMobileNavbar = ref<boolean>(false);

const changeLanguages = (lang: "id" | "en") => {
  setLocale(lang);
};
</script>

<template>
  <nav
    class="navbar p-4 bg-blue dark:bg-dark-medium flex flex-col gap-4 text-white sticky top-0 shadow-md"
  >
    <div
      id="navbar-wrapper"
      class="flex gap-7 w-full max-w-[900px] mx-auto items-center justify-between"
    >
      <div id="navbar-logo" class="">
        <div class="flex flex-col justify-start">
          <span>senimentari_</span>
          <span>blog</span>
        </div>
      </div>
      <div
        id="navbar-button"
        class="md:flex hidden gap-4 flex-1 items-center leading-normal text-sm px-4"
      >
        <NuxtLink to="/" class="font-medium tracking-[0.24px]">
          {{ $t("home") }}
        </NuxtLink>
        <NuxtLink to="/about" class="font-medium tracking-[0.24px]">
          {{ $t("about") }}
        </NuxtLink>
      </div>
      <div
        id="mobile-dark-mode-toggle"
        class="block md:hidden"
        @click="toggleDark()"
      >
        <i :class="`fa-solid text-lg ${isDark ? 'fa-sun' : 'fa-moon'}`"></i>
      </div>
      <div id="toggle-button" class="flex gap-2 items-center">
        <i
          @click="showMobileNavbar = !showMobileNavbar"
          class="fa-solid fa-bars md:hidden inline-block text-lg cursor-pointer"
        ></i>
        <div @click="toggleDark()">
          <i
            :class="`fa-solid ${
              isDark ? 'fa-sun' : 'fa-moon'
            } text-lg hidden md:inline-block cursor-pointer`"
          ></i>
        </div>
        <div id="lang-dropdown" class="relative">
          <i
            class="fa-solid fa-globe cursor-pointer"
            @click="toggleLangOpttion()"
          ></i>
          <div
            v-show="showLangOption"
            class="bg-white w-[100px] h-fit text-sm shadow-md absolute text-dark dark:text-white p-2 rounded-md"
          >
            <ul>
              <li class="cursor-pointer" @click="changeLanguages('id')">
                <img
                  src="/icons/indonesia-flag-icon-16.png"
                  alt="bendera-indonesia"
                  class="inline-block mr-2"
                />
                <span>id</span>
              </li>
              <li class="cursor-pointer" @click="changeLanguages('en')">
                <img
                  src="/icons/united-states-of-america-flag-icon-16.png"
                  alt="american-flag"
                  class="inline-block mr-2"
                />
                <span>en</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="showMobileNavbar"
      id="mobile-navbar"
      class="md:hidden flex flex-col gap-2 items-start justify-start w-full pl-5 text-sm"
    >
      <NuxtLink to="/" class="font-medium tracking-[0.24px]">
        Beranda
      </NuxtLink>
      <NuxtLink to="/about" class="font-medium tracking-[0.24px]">
        Tentang
      </NuxtLink>
    </div>
  </nav>
</template>
