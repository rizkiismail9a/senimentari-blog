<script setup lang="ts">
import Navbar from "~/components/Navbar/Navbar.vue";
import type { Article } from "~/types/articles.type";

const { data: articles } = await useAsyncData(
  "articles",
  (): Promise<Article[]> => $fetch("/api/articles")
);

const searchInput = ref<string>("");
const isSearching = ref<boolean>(false);
const filteredArticle = ref<Article[]>([]);

/**
 * Search the articles based on title and tags
 */
const findArticle = () => {
  isSearching.value = true;
  const searchValue = searchInput.value.toLowerCase();

  if (!articles.value?.length) return;

  if (!searchValue.length) {
    filteredArticle.value = articles.value as Article[];
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
  <Navbar />
  <div class="flex flex-col items-center gap-4">
    <section id="header" class="w-full flex flex-col items-center gap-4">
      <h1 data-aos="fade-right" class="font-extrabold text-center text-[36px]">
        senimentari blog
      </h1>
      <div data-aos="fade-left" class="max-w-[700px] w-full mx-auto">
        <h2 class="font-medium text-center">
          Website ini memuat serangkaian tulisan, artikel, makalah, dan cerita
          yang pernah ditulis oleh Yuri Ostrovsky.
        </h2>
      </div>
    </section>

    <section data-aos="fade-up" class="mb-4" id="search-form">
      <form class="flex justify-center mx-auto w-[90%]">
        <div
          class="border-b-2 dark:border-white border-black md:w-[400px] w-full flex items-center gap-3"
        >
          <i class="fa-solid fa-magnifying-glass text-gray-600"></i>
          <input
            v-model="searchInput"
            @input="findArticle"
            autocomplete="off"
            class="bg-transparent focus:outline-none focus:ring-0 border-none p-1 w-full dark:text-white"
            name="search"
            placeholder="cari judul atau tag"
            type="text"
          />
        </div>
      </form>
    </section>

    <section
      id="home-content"
      data-aos="fade-up"
      class="grid md:grid-cols-3 grid-cols-1 gap-6 pb-[24px]"
    >
      <template v-if="isSearching">
        <CardsArticle
          v-for="article in filteredArticle"
          :key="article._id"
          :credit="article.thumbnail.credit"
          :image="article.thumbnail.src"
          :image-alt="article.title"
          :preview="article.content[0].text!"
          :title="article.title"
          :tags="article.tags"
          :path="article.slug"
        />
      </template>
      <template v-else>
        <CardsArticle
          v-for="article in articles"
          :key="article._id"
          :credit="article.thumbnail.credit"
          :image="article.thumbnail.src"
          :image-alt="article.title"
          :preview="article.content[0].text!"
          :title="article.title"
          :tags="article.tags"
          :path="article.slug"
        />
      </template>
    </section>
  </div>
</template>
