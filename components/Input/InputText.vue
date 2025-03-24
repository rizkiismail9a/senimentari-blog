<script setup lang="ts">
defineProps<{ modelValue: string; placeholder: string }>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onInput = (e: Event) => {
  const value = e.target as HTMLInputElement;
  emits("update:modelValue", value.value);
};
</script>

<template>
  <div
    class="border-b-2 dark:border-white border-black w-full flex items-center gap-3"
  >
    <i class="fa-solid fa-book text-gray-600"></i>
    <input
      :value="modelValue"
      @input="onInput"
      autocomplete="off"
      class="bg-transparent focus:outline-none focus:ring-0 border-none p-1 w-full dark:text-white"
      name="search"
      :placeholder="placeholder"
      type="text"
    />
  </div>
</template>

<style scoped></style>
