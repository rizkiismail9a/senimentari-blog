<script setup lang="ts">
defineProps<{
  useLanguage?: Boolean;
}>();

const isDark = useDark();
const toggleDark = useToggle(isDark);

const showMobileNavbar = ref<boolean>(false);
</script>

<template>
  <nav
    class="p-4 bg-blue dark:bg-dark-medium flex flex-col gap-4 text-white sticky top-0 z-50 shadow-md"
  >
    <div
      id="navbar-wrapper"
      class="flex gap-7 w-full max-w-[900px] mx-auto items-center justify-between"
    >
      <div id="navbar-logo" class="">
        <div class="flex flex-col justify-start">
          <img
            src="/images/logo-blog.webp"
            alt="senimentari blog"
            class="md:w-16 w-12"
          />
        </div>
      </div>
      <div
        id="navbar-button"
        class="md:flex hidden gap-4 flex-1 items-center leading-normal text-sm px-4"
      >
        <NuxtLink to="/" class="font-medium tracking-[0.24px]">
          Beranda
        </NuxtLink>
        <a
          href="https://mr-ismail-page.vercel.app/"
          class="font-medium tracking-[0.24px]"
        >
          Tentang Saya
        </a>
      </div>

      <div
        id="mobile-dark-mode-toggle"
        class="block md:!hidden"
        @click="toggleDark()"
      >
        <i :class="`fa-solid text-lg ${isDark ? 'fa-sun' : 'fa-moon'}`"></i>
      </div>
      <div id="toggle-button" class="flex gap-4 items-center">
        <i
          @click="showMobileNavbar = !showMobileNavbar"
          class="hamburger fa-solid fa-bars text-lg cursor-pointer"
        ></i>
        <i
          @click="toggleDark()"
          :class="`dark-toggle fa-solid ${
            isDark ? 'fa-sun' : 'fa-moon'
          } text-lg cursor-pointer`"
        ></i>
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
      <a
        href="https://mr-ismail-page.vercel.app/"
        class="font-medium tracking-[0.24px]"
      >
        Tentang
      </a>
    </div>
  </nav>
</template>

<style>
.hamburger {
  display: none;
}

#toggle-button {
  align-items: center;
}

#lang-dropdown {
  line-height: 0;
}

.dark-toggle {
  display: block;
}

@media screen and (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .dark-toggle {
    display: none;
  }
}
</style>
