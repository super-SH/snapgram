export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type INewPost = {
  accountId: number;
  caption: string;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUpdatePost = {
  postId: number;
  caption: string;
  imageUrl: string | null;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUpdateUser = {
  accountId: number;
  username: string;
  name: string;
  bio: string;
  imageUrl?: string | null;
  file: File[];
};

export type INewComment = {
  authorId: number;
  postId: number;
  commentText: string;
};
