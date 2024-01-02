import { INewUser } from "@/types";
import { supabase } from "./supabase";

export async function signup({ username, name, email, password }: INewUser) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        name,
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}
