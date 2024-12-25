<script setup lang="ts">
defineProps<{
  date: string;
  title: string;
  subTitle: string;
  image: string;
}>();
</script>

<template>
  <section class="text-base text-gray-600 dark:text-gray-300 mx-auto">
    {{ date }}
  </section>
  <h1 class="font-extrabold text-4xl text-center">
    {{ title }}
  </h1>
  <h2 class="text-center w-full">
    {{ subTitle }}
  </h2>
  <img :src="image" :alt="title" class="w-[700px] rounded-sm mx-auto" />
</template>

<style scoped></style>
