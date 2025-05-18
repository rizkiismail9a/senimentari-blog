<script setup lang="ts">
import ConfirmPassKey from "~/components/Dialog/ConfirmPassKey.vue";
import MyTextArea from "~/components/Input/MyTextArea.vue";
import type { ArticlePost, ContentBlock } from "~/types/articles.type";

useHead({
  meta: [
    {
      hid: "robots",
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});

const openPasskeyDialog = ref<boolean>(true);
const btnText = ref<string>("Submit Artikel");
const tags = ref<string>("");
const newArticle = reactive<ArticlePost>({
  title: "",
  subTitle: "",
  references: [""],
  thumbnail: {
    src: "",
    credit: "",
  },
  slug: "",
  tags: [],
  content: [
    {
      type: "paragraph",
      text: "",
    },
  ],
});

const changeRefAmount = (index: number, isRemoving: boolean) => {
  if (isRemoving) {
    if (newArticle.references.length === 1) return;
    newArticle.references.splice(index, 1);
  } else {
    if (newArticle.references[index] === "") return;
    newArticle.references.push("");
  }
};

const removeContent = (index: number) => {
  if (newArticle.content.length === 1) return;
  newArticle.content.splice(index, 1);
};

const addContent = (
  contentType: "paragraph" | "image" | "code" | "sub-chapter"
) => {
  const contentLength = newArticle.content.length;
  const currentContent = newArticle.content[contentLength - 1];

  const isEmpty =
    currentContent.type === "image"
      ? currentContent?.src === ""
      : currentContent?.text === "";

  if (isEmpty) return;

  const newContent: ContentBlock =
    contentType === "image"
      ? { type: contentType, src: "", alt: "" }
      : { type: contentType, text: "" };

  newArticle.content.push(newContent);
};

const saveArticles = async () => {
  try {
    btnText.value = "Memuat...";
    const token = JSON.parse(sessionStorage.getItem("token") ?? "");

    if (token) {
      const arrayTag = tags.value.split(",");
      newArticle.tags = arrayTag;

      await $fetch("/api/articles/create", {
        method: "POST",
        body: { ...newArticle, token },
      });

      window.location.reload();
    }
  } catch (error) {
    console.error("gagal simpan artikel", error);
  } finally {
    btnText.value = "Submit Artikel";
  }
};
</script>

<template>
  <ConfirmPassKey v-model:open="openPasskeyDialog" />
  <Navbar />
  <div class="flex flex-col items-center gap-4 pt-10 w-full">
    <h1 class="font-extrabold text-xl">Buat Artikel Baru</h1>

    <form
      v-if="!openPasskeyDialog"
      @submit.prevent="saveArticles"
      class="max-w-[800px] flex flex-col gap-4 justify-center items-center w-full"
    >
      <p class="font-bold">Masukkan atribut artikel</p>
      <div class="flex flex-col gap-7 justify-center items-center w-full">
        <InputText
          v-model="newArticle.title"
          placeholder="Masukkan Judul Artikel"
        />
        <InputText
          v-model="newArticle.subTitle"
          placeholder="Masukkan Subjudul Artikel"
        />
        <InputText
          v-model="newArticle.slug"
          placeholder="Masukkan Url Artikel dengan format /new-post/[judul-baru]"
        />
        <InputText
          v-model="newArticle.thumbnail.src"
          placeholder="Masukkan Url Thumbnail"
        />
        <InputText
          v-model="newArticle.thumbnail.credit"
          placeholder="Masukkan Kredit Thumbnail"
        />

        <InputText
          v-model="tags"
          placeholder="Masukkan Tag Artikel, pisahkan dengan koma. Ex: python,javascript"
        />

        <!-- referensi -->
        <div
          v-for="(ref, index) in newArticle.references"
          :key="index"
          class="w-full"
        >
          <div class="flex items-center gap-2">
            <InputText
              v-model="newArticle.references[index]"
              placeholder="Masukkan Link Referensi"
            />

            <div
              class="border border-black p-2 rounded-full cursor-pointer"
              @click="changeRefAmount(index, false)"
            >
              +
            </div>
            <div
              class="border-2 text-red border-red-500 p-2 rounded-full cursor-pointer"
              @click="changeRefAmount(index, true)"
            >
              <i class="fa-solid fa-trash text-red-500"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Konten artikel -->
      <p class="font-bold">Masukkan konten artikel</p>
      <div
        v-for="(content, index) in newArticle.content"
        :key="index"
        class="w-full"
      >
        <div v-if="content.type === 'image'" class="flex items-center gap-2">
          <InputText
            v-model="newArticle.content[index].src!"
            placeholder="Masukkan Url Gambar"
          />
          <InputText
            v-model="newArticle.content[index].alt!"
            placeholder="Masukkan Text Alt Gambar"
          />
          <div
            class="border-2 text-red border-red-500 p-2 rounded-full cursor-pointer"
            @click="removeContent(index)"
          >
            <i class="fa-solid fa-trash text-red-500"></i>
          </div>
        </div>

        <div v-else class="flex items-center gap-2">
          <MyTextArea
            v-model="newArticle.content[index].text!"
            placeholder="Masukkan Konten Paragraf"
          />
          <div
            class="border-2 text-red border-red-500 p-2 rounded-full cursor-pointer"
            @click="removeContent(index)"
          >
            <i class="fa-solid fa-trash text-red-500"></i>
          </div>
        </div>
      </div>

      <!-- Button tambah konten -->
      <div class="flex items-center gap-4">
        <button
          type="button"
          class="border rounded-full p-2 bg-blue text-white"
          @click="addContent('paragraph')"
        >
          Tambah Paragraf
        </button>
        <button
          type="button"
          class="border rounded-full p-2 bg-blue text-white"
          @click="addContent('image')"
        >
          Tambah Gambar
        </button>
        <button
          type="button"
          class="border rounded-full p-2 bg-blue text-white"
          @click="addContent('code')"
        >
          Tambah Kode
        </button>
        <button
          type="button"
          class="border rounded-full p-2 bg-blue text-white"
          @click="addContent('sub-chapter')"
        >
          Tambah Chapter
        </button>
      </div>

      <button class="border-none bg-green-500 text-white p-3 rounded-full">
        {{ btnText }}
      </button>
    </form>
  </div>
</template>

<style scoped></style>
