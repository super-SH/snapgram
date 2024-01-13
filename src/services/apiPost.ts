import { INewPost, IUpdatePost } from "@/types";
import { supabase, supabaseUrl } from "./supabase";
import { PostWithCreator } from "@/types/collection";

export async function createPost(post: INewPost) {
  const imageName = `${Math.random()}-${post.file[0].name}`.replaceAll("/", "");
  const imageUrl = `${supabaseUrl}/storage/v1/object/public/post-images/${imageName}`;

  const newPost = {
    imageUrl,
    creator: post.accountId,
    caption: post.caption,
    location: post.location,
    tags: post.tags?.replace(/ /g, "").split(",") || [],
  };

  // Create a post document
  const { data, error } = await supabase
    .from("Posts")
    .insert([newPost])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  // upload a image to the storage bucket
  const { error: storageError } = await supabase.storage
    .from("post-images")
    .upload(imageName, post.file[0]);

  // if there is an error while uploading an image , delete the document that created lately
  if (storageError) {
    await supabase.from("Posts").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error("Post image could not be uploaded");
  }

  return data;
}

export async function getRecentPosts() {
  const { data, error } = await supabase
    .from("Posts")
    .select("* , creator(*)")
    .order("created_at", { ascending: false })
    .limit(20)
    .returns<PostWithCreator[]>();

  if (error) {
    console.error(error);
    throw new Error("Posts could not be loaded");
  }

  return data;
}

export async function savePost(accountId: number, postId: number) {
  const { data, error } = await supabase
    .from("SavedPosts")
    .insert([{ accountId, postId }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Error while saving a post");
  }

  return data;
}

export async function removeSavedPost(savedRecordId: number) {
  const { error } = await supabase
    .from("SavedPosts")
    .delete()
    .eq("id", savedRecordId);

  if (error) {
    console.log(error);
    throw new Error("Error while removing the saved post");
  }
}

export async function getSavedPostOfCurrentAccount(
  accountId: number | undefined,
) {
  if (!accountId) return;

  const { data, error } = await supabase
    .from("SavedPosts")
    .select("*")
    .eq("accountId", accountId);

  if (error) {
    console.log(error);
    throw new Error("Error while loading saved post");
  }

  return data;
}

export async function getPostById(postId: string | undefined) {
  if (!postId) throw new Error("Post could not be loaded");

  const { data, error } = await supabase
    .from("Posts")
    .select("* , creator(*)")
    .eq("id", Number(postId))
    .returns<PostWithCreator[]>()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Post could not be loaded");
  }
  return data;
}

export async function updatePost(post: IUpdatePost) {
  const hasFileToUpdate = post.file.length > 0;

  let imageUrl = post.imageUrl;
  let imageName: string | undefined;

  if (hasFileToUpdate) {
    imageName = `${Math.random()}-${post.file[0].name}`.replaceAll("/", "");
    imageUrl = `${supabaseUrl}/storage/v1/object/public/post-images/${imageName}`;

    const { error: storageError } = await supabase.storage
      .from("post-images")
      .upload(imageName, post.file[0]);

    if (storageError) {
      console.error(storageError);
      throw new Error("Post image could not be uploaded");
    }
  }

  const updatedPost = {
    imageUrl,
    caption: post.caption,
    location: post.location,
    tags: post.tags?.replace(/ /g, "").split(",") || [],
  };

  const { data, error } = await supabase
    .from("Posts")
    .update(updatedPost)
    .eq("id", post.postId);

  if (error) {
    console.log(error);

    // if there is an error while updating post , delete the newly uploaded image
    if (imageName) {
      await supabase.storage.from("avatars").remove([imageName]);
    }

    throw new Error("Post could not be updated");
  }

  return data;
}
