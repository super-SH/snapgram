import { INewUser } from "@/types";
import { supabase } from "./supabase";

export async function signup({ username, name, email, password }: INewUser) {
  const { data, error: errorAuth } = await supabase.auth.signUp({
    email,
    password,
  });

  // Create a row in Users Table
  const { error } = await supabase
    .from("Users")
    .insert([{ email, name, username, accountId: data.user?.id }])
    .select();

  if (errorAuth) throw new Error(errorAuth.message);
  if (error) throw new Error(error.message);

  return data;
}

export async function signin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return data?.user;
}

export async function signout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
