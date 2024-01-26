import { INewComment } from "@/types";
import { supabase } from "./supabase";

export async function createComment(comment: INewComment) {
  const { data, error } = await supabase
    .from("Comments")
    .insert([comment])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Comment could not be created");
  }

  return data;
}
