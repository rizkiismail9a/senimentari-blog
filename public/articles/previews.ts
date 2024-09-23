import type { ArticlePreview } from "~/types/articlePreview.type";

export const articles = ref<ArticlePreview[]>([
  {
    id: "id-acak",
    title: "title-1",
    image: {
      path: "test.jpg",
      alt: "kamera",
    },
    preview: "preview-1",
    tags: ["vue", "javascript"],
  },
  {
    id: "id-acak-2",
    title: "title-2",
    image: {
      path: "test.jpg",
      alt: "kamera",
    },
    preview: "preview-2",
    tags: ["react", "javascript"],
  },
  {
    id: "id-acak-2",
    title: "title-2",
    image: {
      path: "test.jpg",
      alt: "kamera",
    },
    preview: "preview-2",
    tags: ["react", "javascript"],
  },
  {
    id: "id-acak-2",
    title: "title-2",
    image: {
      path: "test.jpg",
      alt: "kamera",
    },
    preview: "preview-2",
    tags: ["react", "javascript"],
  },
]);
