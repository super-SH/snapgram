import { INewComment } from "@/types";
import { supabase } from "./supabase";
import { CommentWithAuthor } from "@/types/collection";
import { createNotification } from "./apiNotification";

export async function createComment(
  comment: INewComment,
  postCreatorId: number,
) {
  const { data, error } = await supabase
    .from("Comments")
    .insert([comment])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Comment could not be created");
  }

  await createNotification({
    type: "comment-post",
    notifyTo: postCreatorId,
    triggerBy: comment.authorId,
    postId: comment.postId,
  });

  return data;
}

export async function editComment(commentId: number, commentText: string) {
  const { data, error } = await supabase
    .from("Comments")
    .update({ commentText })
    .eq("id", commentId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Comment could not be updated");
  }

  return data;
}

export async function getCommentById(commentId: number | null) {
  if (!commentId) throw new Error("Comment could not be loaded");
  const { data, error } = await supabase
    .from("Comments")
    .select("*")
    .eq("id", commentId)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Comment could not be loaded");
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

export async function deleteComment(commentId: number) {
  const { error } = await supabase
    .from("Comments")
    .delete()
    .eq("id", commentId);

  if (error) {
    console.log(error);
    throw new Error("Comments could not be deleted");
  }
}
