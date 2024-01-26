import { INewComment } from "@/types";
import { supabase } from "./supabase";
import { CommentWithAuthor } from "@/types/collection";

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

export async function getAllCommentsAndCountByPostId(postId: number) {
  const { data, error, count } = await supabase
    .from("Comments")
    .select("* , authorId(*)", { count: "exact" })
    .order("created_at", { ascending: false })
    .eq("postId", postId)
    .returns<CommentWithAuthor[]>();

  if (error) {
    console.error(error);
    throw new Error("Comment could not be loaded");
  }

  return { data, count };
}
