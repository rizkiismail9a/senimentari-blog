<script setup lang="ts">
defineProps<{
  image: string;
  imageAlt: string;
  title: string;
  preview: string;
  tags: string[];
}>();
</script>

<template>
  <div
    class="bg-white dark:bg-dark-medium shadow-md rounded-sm w-full mx-auto max-w-[300px] h-[400px] px-3 py-2 flex flex-col justify-center gap-2"
  >
    <img
      class="w-full h-[200px] object-cover overflow-hidden rounded-t-sm"
      :src="image"
      :alt="imageAlt"
    />

    <h4 class="font-bold">{{ $t(title) }}</h4>

    <div id="tags">
      <span
        v-for="tag in tags"
        :key="tag"
        class="bg-green-500 text-white inline-block mr-1 py-1 px-3 rounded-lg text-xs w-fit"
      >
        {{ tag }}
      </span>
    </div>
    <div
      v-html="$t(preview)"
      id="preview"
      class="text-xs line-clamp-5 text-justify"
    ></div>
    <div
      class="text-xs cursor-pointer hover:underline text-blue dark:text-white"
    >
      Baca selengkapnya...
    </div>
  </div>
</template>
