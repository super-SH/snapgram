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

export async function getSavedPostOfCurrentAccount(
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
