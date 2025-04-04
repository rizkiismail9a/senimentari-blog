<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder: string;
}>();

const emits = defineEmits<{
  "update:modelValue": [data: string];
}>();

const onInput = (event: Event) => {
  const value = event.target as HTMLInputElement;

  emits("update:modelValue", value.value);
};
</script>

<template>
  <textarea
    :value="modelValue"
    @input="onInput"
    class="resize-y w-full h-[100px] border border-black bg-transparent p-2"
    :placeholder="placeholder"
  ></textarea>
</template>

<style scoped></style>
