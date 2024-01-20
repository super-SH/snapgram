import { LikedPost, PostWithCreator } from "@/types/collection";
import { supabase } from "./supabase";

export async function likePost(accountId: number, postId: number) {
  const { data, error } = await supabase
    .from("Likes")
    .insert([{ accountId, postId }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Error while liking a post");
  }

  return data;
}

export async function unlikePost(likesRecordId: number) {
  const { error } = await supabase
    .from("Likes")
    .delete()
    .eq("id", likesRecordId);

  if (error) {
    console.log(error);
    throw new Error("Error while unliking the post");
  }
}

export async function getLikedPostsRecord(accountId: number | undefined) {
  if (!accountId) return;

  const { data, error } = await supabase
    .from("Likes")
    .select("*")
    .eq("accountId", accountId);

  if (error) {
    console.log(error);
    throw new Error("Error while loading liked post");
  }

  return data;
}

export async function getLikedPosts(accountId: number | undefined) {
  if (!accountId) return;

  const { data, error } = await supabase
    .from("Likes")
    .select("postId(*, creator(*))")
    .eq("accountId", accountId)
    .returns<LikedPost[]>();

  if (error) {
    console.log(error);
    throw new Error("Error while loading liked post");
  }

  const posts: PostWithCreator[] = data.map((item) => Object.values(item)[0]);

  return posts;
}

export async function getLikesCountByPostId(postId: number) {
  const { count, error } = await supabase
    .from("Likes")
    .select("", { count: "exact" })
    .eq("postId", postId);

  if (error) {
    console.log(error);
    throw new Error("Error while loading likes count");
  }

  return count;
}
