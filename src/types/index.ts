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
