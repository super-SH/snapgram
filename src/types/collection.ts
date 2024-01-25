import { Tables } from "./supabase";

export type PostType = Tables<"Posts">;
export type AccountType = Tables<"Accounts">;
export type PostRecord = Tables<"Likes">;
export type FollowRecord = Tables<"Follows">;

export interface PostWithCreator extends Omit<PostType, "creator"> {
  creator: AccountType;
}

export interface SavedPost {
  posdId: PostWithCreator;
}
export interface LikedPost {
  posdId: PostWithCreator;
}
