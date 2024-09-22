<script setup lang="ts">
import type { ArticlePreview } from "~/types/articlePreview.type";
import { articles } from "~/public/articles/previews";

const searchInput = ref<string>("");
const isSearching = ref<boolean>(false);
const filteredArticle = ref<ArticlePreview[]>([]);

/**
 * Search the articles based on title and tags
 */
const findArticle = () => {
  isSearching.value = true;
  const searchValue = searchInput.value.toLowerCase();

  if (!searchValue.length) {
    filteredArticle.value = articles.value;
    isSearching.value = false;
    return;
  }

  filteredArticle.value = articles.value.filter((a) => {
    return (
      a.tags.some((tag) => tag.toLowerCase().includes(searchValue)) ||
      a.title.toLowerCase().includes(searchValue)
    );
  });
};
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

  <section class="mx-auto max-w-[900px] mb-4" id="search-form">
    <form class="flex justify-center mx-auto w-[90%]">
      <div
        class="border-b-2 border-black md:w-[400px] w-full flex items-center gap-3"
      >
        <i class="fa-solid fa-magnifying-glass text-gray-600"></i>
        <input
          v-model="searchInput"
          @input="findArticle"
          autocomplete="off"
          class="bg-transparent focus:outline-none focus:ring-0 border-none p-1 w-full"
          name="search"
          :placeholder="$t('search-placeholder')"
          type="text"
        />
      </div>
    </form>
  </section>

  <section
    id="home-content"
    class="w-full max-w-[900px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-6 pb-[24px]"
  >
    <template v-if="isSearching">
      <CardsArticle
        v-for="article in filteredArticle"
        :key="article.id"
        :image="`/images/${article.image.path}`"
        :image-alt="article.image.alt"
        :preview="article.preview"
        :title="article.title"
        :tags="article.tags"
      />
    </template>
    <template v-else>
      <CardsArticle
        v-for="article in articles"
        :key="article.id"
        :image="`/images/${article.image.path}`"
        :image-alt="article.image.alt"
        :preview="article.preview"
        :title="article.title"
        :tags="article.tags"
      />
    </template>
  </section>
</template>
