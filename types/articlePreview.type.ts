import type { Category } from "./category.type";

export type ArticlePreview = {
  id: string;
  title: string;
  image: {
    path: string;
    alt: string;
  };
  preview: string;
  tags: string[];
};
