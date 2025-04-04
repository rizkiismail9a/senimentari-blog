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
  references: string[];
};

export type Article = ArticlePost & {
  _id: string;
  createdAt: Date;
};

export type ContentBlock = {
  type: "paragraph" | "image" | "code" | "sub-chapter";
  text?: string;
  src?: string;
  alt?: string;
};
