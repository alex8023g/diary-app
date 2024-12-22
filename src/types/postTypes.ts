export type PostTags = {
  red: boolean;
  green: boolean;
  blue: boolean;
  yellow: boolean;
  fuchsia: boolean;
};

export type Post = {
  id: string;
  text: string;
  tags: PostTags;
  date: Date;
};
