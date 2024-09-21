<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);

const showMobileNavbar = ref<boolean>(false);
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
        class="md:flex hidden gap-4 flex-1 items-center leading-normal text-sm"
      >
        <NuxtLink to="/" class="font-medium tracking-[0.24px]">
          Beranda
        </NuxtLink>
        <NuxtLink to="/about" class="font-medium tracking-[0.24px]">
          Tentang
        </NuxtLink>
      </div>
      <div class="block md:hidden" @click="toggleDark()">
        <i :class="`fa-solid text-lg ${isDark ? 'fa-sun' : 'fa-moon'}`"></i>
      </div>
      <div id="toggle-button">
        <i
          @click="showMobileNavbar = !showMobileNavbar"
          class="fa-solid fa-bars md:hidden inline-block text-lg cursor-pointer"
        ></i>
        <div @click="toggleDark()">
          <i class="fa-solid fa-moon text-lg hidden md:inline-block"></i>
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
