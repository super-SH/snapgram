import { IUpdateUser } from "@/types";
import { supabase } from "./supabase";

export async function getAccount(accountId?: number) {
  if (accountId) {
    const { data: account, error } = await supabase
      .from("Accounts")
      .select("*")
      .eq("id", accountId)
      .single();

    if (error) throw new Error(error.message);

    return account;
  }

  const { data, error } = await supabase.auth.getUser();

  if (!data) return null;
  if (error) throw new Error(error.message);

  const { data: account, error: errorAccount } = await supabase
    .from("Accounts")
    .select("*")
    .eq("accountId", data.user.id)
    .single();

  if (errorAccount) throw new Error(errorAccount.message);

  return account;
}

export async function getAccounts() {
  const { data, error } = await supabase.from("Accounts").select("*").limit(20);

  if (error) {
    console.log(error);
    throw new Error("Account could not be loaded");
  }

  return data;
}

export async function updateProfile(profile: IUpdateUser) {
  const updatedProfile = {
    username: profile.username,
    name: profile.name,
    bio: profile.bio,
  };

  const { data, error } = await supabase
    .from("Accounts")
    .update(updatedProfile)
    .eq("id", profile.accountId);

  if (error) {
    console.log(error);

    throw new Error("Profile could not be updated");
  }

  return data;
}
