import { Tables } from "./supabase";

export type PostType = Tables<"Posts">;
export type AccountType = Tables<"Accounts">;
export type PostRecord = Tables<"Likes">;

export interface PostWithCreator extends Omit<PostType, "creator"> {
  creator: AccountType;
}
