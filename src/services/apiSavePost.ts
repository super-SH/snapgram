import { PostWithCreator, SavedPost } from "@/types/collection";
import { supabase } from "./supabase";

export async function savePost(accountId: number, postId: number) {
  const { data, error } = await supabase
    .from("SavedPosts")
    .insert([{ accountId, postId }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error while saving a post");
  }

  return data;
}

export async function removeSavedPost(savedRecordId: number) {
  const { error } = await supabase
    .from("SavedPosts")
    .delete()
    .eq("id", savedRecordId);

  if (error) {
    console.log(error);
    throw new Error("Error while removing the saved post");
  }
}

export async function getSavedPostRecordOfCurrentAccount(
  accountId: number | undefined,
) {
  if (!accountId) return;

  const { data, error } = await supabase
    .from("SavedPosts")
    .select("*")
    .eq("accountId", accountId);

  if (error) {
    console.log(error);
    throw new Error("Error while loading saved post");
  }

  return data;
}

export async function getSavedPostOfCurrentAccount(
  accountId: number | undefined,
) {
  if (!accountId) return;

  const { data, error } = await supabase
    .from("SavedPosts")
    .select("postId(*, creator(*))")
    .eq("accountId", accountId)
    .returns<SavedPost[]>();

  if (error) {
    console.log(error);
    throw new Error("Error while loading saved post");
  }

  const posts: PostWithCreator[] = data.map((item) => Object.values(item)[0]);

  return posts;
}
