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

export async function getLikedPostOfCurrentAccount(
  accountId: number | undefined,
) {
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

export async function getLikesCountByPostId(postId: number) {
  const { count, error } = await supabase
    .from("Likes")
    .select("", { count: "exact" })
    .eq("postId", postId);

  console.log(count);

  if (error) {
    console.log(error);
    throw new Error("Error while loading likes count");
  }

  return count;
}
