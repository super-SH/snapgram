import { Tables } from "./supabase";

export type PostType = Tables<"Posts">;
export type AccountType = Tables<"Accounts">;

export interface PostWithCreator extends Omit<PostType, "creator"> {
  creator: AccountType;
}
