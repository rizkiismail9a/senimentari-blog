import Articles from "~/server/model/articles.model";
import { ArticlePost } from "~/types/articles.type";

export default defineEventHandler(async (event) => {
  await connectDB();

  const body = await readBody<ArticlePost & { token: string }>(event);

  if (!body.token) {
    throw createError({
      statusCode: 401,
      message: "Token tidak valid",
    });
  }

  const newArticle = new Articles(body);
  await newArticle.save();
  return { message: "Artikel berhasil dibuat!", article: newArticle };
});
