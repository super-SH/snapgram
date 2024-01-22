import { supabase } from "./supabase";

export async function followAccount(followToId: number, followedById: number) {
  const { data, error } = await supabase
    .from("Follows")
    .insert([{ followToId, followedById }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Error while following an account");
  }

  return data;
}

export async function unfollowAccount(followsRecordId: number) {
  const { error } = await supabase
    .from("Follows")
    .delete()
    .eq("id", followsRecordId);

  if (error) {
    console.log(error);
    throw new Error("Error while unfollowing");
  }
}

export async function getFollowingsRecord(accountId: number | undefined) {
  if (!accountId) return;

  const { data, error } = await supabase
    .from("Follows")
    .select("*")
    .eq("followedById", accountId);

  if (error) {
    console.log(error);
    throw new Error("Error while loading followings");
  }

  return data;
}
