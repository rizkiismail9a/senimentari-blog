import mongoose, { Schema } from "mongoose";
import { Article } from "~/types/articles.type";

const ArticleSchema = new Schema<Article>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    subTitle: { type: String, required: true },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    thumbnail: {
      src: { type: String, required: true },
      credit: { type: String },
    },
    content: [
      {
        type: {
          type: String,
          enum: ["paragraph", "image", "code", "sub-chapter"],
          required: true,
        },
        text: { type: String },
        src: { type: String },
        alt: { type: String },
        title: { type: String },
      },
    ],
    references: [
      {
        type: String,
      },
    ],
  },

  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

const Articles = mongoose.model("Article", ArticleSchema);

export default Articles;
