<script setup lang="ts">
import type { ArticlePreview } from "~/types/articlePreview.type";

const articles = ref<ArticlePreview[]>([
  {
    id: "id-acak",
    image: {
      path: "test.jpg",
      alt: "kamera",
    },
    preview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, autem maxime possimus neque eaque libero facilis nemo assumenda! Ullam illo obcaecati nesciunt officiis iusto reprehenderit? Animi quibusdam, excepturi rerum deleniti suscipit alias nisi molestiae eligendi, fugiat similique non, error vitae!",
    category: {
      id: 1,
      name: "web-dev",
      color: "green",
    },
  },
]);
</script>

<template>
  <div
    id="header"
    class="w-full flex flex-col items-center gap-4 max-w-[900px] p-4 m-auto"
  >
    <h1 class="font-extrabold text-center text-[36px]">
      {{ $t("home-header") }}
    </h1>
    <div class="max-w-[700px] w-full mx-auto">
      <h3 class="font-medium text-center">
        {{ $t("home-header-desc") }}
      </h3>
    </div>
  </div>

  <div
    id="home-content"
    class="w-full max-w-[900px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-6 pb-[24px]"
  >
    <CardsArticle
      v-for="article in articles"
      :key="article.id"
      :image="`/images/${article.image.path}`"
      :image-alt="article.image.alt"
      :preview="article.preview"
      :category="article.category"
    />
  </div>
</template>
