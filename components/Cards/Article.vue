<script setup lang="ts">
import type { Category } from "~/types/category.type";

defineProps<{
  image: string;
  imageAlt: string;
  preview: string;
  category: Category;
}>();
</script>
<template>
  <div
    class="bg-white dark:bg-dark-medium shadow-md rounded-sm w-full mx-auto max-w-[300px] h-[380px] px-3 py-2 flex flex-col justify-center gap-2"
  >
    <img
      class="w-full h-[200px] object-cover overflow-hidden rounded-t-sm"
      :src="image"
      :alt="imageAlt"
    />

    <div
      id="category"
      :class="`bg-${category.color}-300 text-white inline-block py-1 px-3 rounded-lg text-xs w-fit`"
    >
      {{ category.name }}
    </div>
    <div id="preview" class="text-xs line-clamp-5 text-justify">
      {{ preview }}
    </div>
    <div
      class="text-xs cursor-pointer hover:underline text-blue dark:text-white"
    >
      Baca selengkapnya...
    </div>
  </div>
</template>
