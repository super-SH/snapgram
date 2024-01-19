import { supabase } from "./supabase";

export async function getCurrentAccount() {
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
