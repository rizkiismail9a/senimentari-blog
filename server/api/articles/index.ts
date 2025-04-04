import Articles from "~/server/model/articles.model";

export default defineEventHandler(async () => {
  await connectDB();

  const articles = await Articles.find();

  return articles;
});
