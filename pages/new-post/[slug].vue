<script setup lang="ts">
import { type Article } from "~/types/articles.type";

// Library or package
const route = useRoute();

// Async data
const { data: article, error } = await useAsyncData("article", () =>
  $fetch<Article>(`/api/articles/${route.params.slug}`)
);

useHead({
  title: article.value
    ? article.value.title
    : "senimentari blog | tips dan trik software development",

  meta: [
    { charset: "utf-8" },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
    },
    {
      name: "description",
      content: article.value
        ? article.value.subTitle
        : "Aplikasi penyaji tips, trik, dan solusi inovatif untuk mengatasi masalah bug dan konfigurasi dalam pengembangan software. Didesain khusus untuk developer pemula yang ingin belajar lebih mudah dan efisien.",
    },
    {
      name: "keywords",
      content:
        "javascript, git, onesignal, tips, developer, pemula, bug, error, cara, trik",
    },
    {
      name: "author",
      content: "Yuri S. Ostrovsky",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      property: "og:title",
      content: article.value
        ? article.value.title
        : "senimentari blog | tips dan trik software development",
    },
    {
      property: "og:description",
      content: article.value
        ? article.value.subTitle
        : "Kumpulan artikel yang berisi tips, trik, dan panduan konfigurasi serta debug pada pengembangan software",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://senimentari-blog.vercel.app/",
    },
    {
      property: "og:image",
      content: `https://senimentari-blog.vercel.app/${
        article.value ? article.value.thumbnail.src : "/images/logo-blog.webp"
      }`,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: article.value
        ? article.value.title
        : "senimentari blog | tips dan trik software development",
    },
    {
      name: "twitter:description",
      content: article.value
        ? article.value.subTitle
        : "Aplikasi penyaji tips, trik, dan solusi inovatif untuk mengatasi masalah bug dan konfigurasi dalam pengembangan software.",
    },
    {
      name: "twitter:image",
      content: `https://senimentari-blog.vercel.app/${
        article.value ? article.value.thumbnail.src : "/images/logo-blog.webp"
      }`,
    },
  ],
});

// Variables
const moreContent = ref<{ title: string; link: string }[]>([
  {
    title: "Cara Menggunakan Skema Refresh pada Nuxt Auth",
    link: "/new-post/refresh-token-scheme",
  },
  {
    title: "Cara Membuat Tombol Subscribe Notifikasi dengan OneSignal",
    link: "/new-post/custom-onesignal-button",
  },
]);
</script>

<template>
  <Navbar />

  <div
    v-if="article"
    id="git-revert-cherry-pick"
    class="w-full max-w-[900px] mx-auto flex flex-col gap-5 items-start pt-10 pb-10 px-4"
  >
    <!-- Tags -->
    <section id="tags" class="mx-auto">
      <span
        v-for="tag in article.tags"
        :key="tag"
        class="bg-green-500 text-white inline-block mr-1 py-1 px-3 rounded-lg text-xs w-fit"
      >
        {{ tag }}
      </span>
    </section>

    <!-- created at -->
    <section class="text-base text-gray-600 dark:text-gray-300 mx-auto">
      {{
        new Date(article.createdAt).toLocaleDateString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}
    </section>

    <!-- Title -->
    <h1 class="font-extrabold text-4xl text-center">
      {{ article.title }}
    </h1>

    <!-- Subtitle -->
    <h2 class="text-center w-full">
      {{ article.subTitle }}
    </h2>

    <!-- thumbnail -->
    <img
      :src="article.thumbnail?.src"
      :alt="article.title"
      class="w-[700px] rounded-sm mx-auto bg-white"
      :title="article.thumbnail?.credit"
    />

    <!-- content -->

    <div class="flex flex-col items-center justify-center w-[100%] gap-4">
      <div v-for="(item, index) in article.content" :key="index" class="w-full">
        <p v-if="item.type === 'paragraph'" class="text-base text-justify">
          {{ item.text }}
        </p>
        <img
          v-if="item.type === 'image'"
          :src="item.src"
          :alt="item.alt"
          class="max-w-[700px] w-full rounded-sm mx-auto bg-white"
        />
        <h3
          v-if="item.type === 'sub-chapter'"
          class="w-full font-bold text-2xl"
        >
          {{ item.text }}
        </h3>
        <pre
          v-if="item.type === 'code'"
          v-html="item.text"
          class="w-full h-fit p-2 bg-white shadow-md dark:bg-dark-medium overflow-x-auto"
        ></pre>
      </div>
    </div>

    <FooterPost :references="article.references" :more="moreContent" />
  </div>
</template>
