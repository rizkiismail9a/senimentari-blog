<script setup lang="ts">
const route = useRoute();
const headers = useRequestHeaders(["user-agent"]);
const userAgent = headers["user-agent"] || "";
const isMobile = /Mobile/i.test(userAgent);
const isDesktop = useState<boolean>("is-mobile", () => !isMobile);
</script>

<template>
  <Navbar />

  <div class="flex flex-col items-center gap-4 pt-10 w-full">
    <iframe
      v-if="isDesktop"
      :src="`/docs/${route.params.slug}`"
      type="application/pdf"
      width="100%"
      class="h-screen"
    />

    <p v-else>
      Konten tidak tersedia di mobile, buka laman di desktop atau
      <NuxtLink
        :to="`/docs/${route.params.slug}`"
        target="_blank"
        class="text-blue"
        download
      >
        unduh file
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped></style>
