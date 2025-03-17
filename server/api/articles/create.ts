import Articles from "~/server/model/articles.model";
import { ArticlePost } from "~/types/articles.type";

export default defineEventHandler(async (event) => {
  await connectDB();

  const body = await readBody<ArticlePost>(event);
  const newArticle = new Articles(body);
  await newArticle.save();
  return { message: "Artikel berhasil dibuat!", article: newArticle };
});
