import Articles from "~/server/model/articles.model";

export default defineEventHandler(async (event) => {
  await connectDB();

  const { slug } = event.context.params as { slug: string };

  return await Articles.findOne({ slug });
});
