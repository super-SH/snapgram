import { INewPost } from "@/types";
import { supabase, supabaseUrl } from "./supabase";
import { PostWithCreator } from "@/types/collection";

export async function createPost(post: INewPost) {
  const imageName = `${Math.random()}-${post.file[0].name}`.replaceAll("/", "");

  const imageUrl = `${supabaseUrl}/storage/v1/object/public/postImage/${imageName}`;

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
