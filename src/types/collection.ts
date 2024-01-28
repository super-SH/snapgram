import { Tables } from "./supabase";

export type PostType = Tables<"Posts">;
export type AccountType = Tables<"Accounts">;
export type PostRecord = Tables<"Likes">;
export type FollowRecord = Tables<"Follows">;
export type CommentType = Tables<"Comments">;
export type Notifications = Tables<"Notifications">;

export interface PostWithCreator extends Omit<PostType, "creator"> {
  creator: AccountType;
}

export interface CommentWithAuthor extends Omit<CommentType, "authorId"> {
  authorId: AccountType;
}

export interface ExtendedNotification
  extends Omit<Notifications, "triggerBy" | "postId"> {
  triggerBy: AccountType;
  postId: PostType;
}

export interface SavedPost {
  posdId: PostWithCreator;
}
export interface LikedPost {
  posdId: PostWithCreator;
}
