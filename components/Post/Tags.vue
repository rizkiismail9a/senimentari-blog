<script setup lang="ts">
defineProps<{ tags: string[] }>();
</script>

<template>
  <section id="tags" class="mx-auto">
    <span
      v-for="tag in tags"
      :key="tag"
      class="bg-green-500 text-white inline-block mr-1 py-1 px-3 rounded-lg text-xs w-fit"
    >
      {{ tag }}
    </span>
  </section>
</template>

<style scoped></style>
