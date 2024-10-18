<script setup lang="ts"></script>
<template>
  <Navbar />
  <main
    class="bg-gray-100 dark:bg-dark min-h-screen text-dark dark:text-white tracking-[0.24px]"
  >
    <div class="py-4 md:px-0 px-2 m-auto w-full">
      <slot></slot>
    </div>
  </main>
</template>
