import { createNotification } from "./apiNotification";
import { supabase } from "./supabase";

export async function followAccount(followToId: number, followedById: number) {
  if (followToId === followedById) throw new Error("You cant follow yourself");

  const { data, error } = await supabase
    .from("Follows")
    .insert([{ followToId, followedById }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Error while following an account");
  }

  await createNotification({type: 'follow' , notifyTo: followToId , triggerBy: followedById })

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

export async function getFollowers(accountId: number | undefined) {
  if (!accountId) return;

  // get all followerId of the passed acoount
  const { data, error, count } = await supabase
    .from("Follows")
    .select("followedById", { count: "exact" })
    .eq("followToId", accountId);

  if (error) {
    console.log(error);
    throw new Error("Error while loading followings");
  }

  return { data, count };
}

export async function getFollowings(accountId: number | undefined) {
  if (!accountId) return;

  // get all followings of the passed acoount
  const { data, error, count } = await supabase
    .from("Follows")
    .select("followToId", { count: "exact" })
    .eq("followedById", accountId);

  if (error) {
    console.log(error);
    throw new Error("Error while loading followings");
  }

  return { data, count };
}
