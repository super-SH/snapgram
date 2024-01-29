import { IUpdateUser } from "@/types";
import { supabase, supabaseUrl } from "./supabase";

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

  if (error) throw new Error(error.message);

  const { data: account, error: errorAccount } = await supabase
    .from("Accounts")
    .select("*")
    .eq("accountId", data.user.id)
    .single();

  if (errorAccount) throw new Error(errorAccount.message);

  return account;
}

export async function getAccounts(currentAccountId?: number) {
  if (!currentAccountId) throw new Error("Account could not be loaded");

  const { data, error } = await supabase
    .from("Accounts")
    .select("*")
    .neq("id", currentAccountId)
    .limit(20);

  if (error) {
    console.log(error);
    throw new Error("Account could not be loaded");
  }

  return data;
}

export async function updateProfile(profile: IUpdateUser) {
  const hasFileToUpdate = profile.file.length > 0;

  let imageUrl = profile.imageUrl;
  let imageName: string | undefined;

  if (hasFileToUpdate) {
    imageName = `${Math.random()}-${profile.file[0].name}`.replaceAll("/", "");
    imageUrl = `${supabaseUrl}/storage/v1/object/public/profile-images/${imageName}`;

    const { error: storageError } = await supabase.storage
      .from("profile-images")
      .upload(imageName, profile.file[0]);

    if (storageError) {
      console.error(storageError);
      throw new Error("Profile image could not be uploaded");
    }
  }

  const updatedProfile = {
    username: profile.username,
    name: profile.name,
    bio: profile.bio,
    profileUrl: imageUrl,
    profileImgName: imageName,
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
