export type ArticlePost = {
  title: string;
  slug: string;
  subTitle: string;
  tags: string[];
  thumbnail: {
    src: string;
    credit: string;
  };
  content: ContentBlock[];
};

export type Article = ArticlePost & {
  _id: string;
  createdAt: Date;
  references: string[];
};

export type ContentBlock = {
  type: "paragraph" | "image" | "code";
  text?: string;
  src?: string;
  alt?: string;
  title?: string;
};
