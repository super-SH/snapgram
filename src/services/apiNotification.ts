import { NotificationsType } from "@/types/supabase";
import { supabase } from "./supabase";

export async function createNotification({
  type,
  notifyTo,
  triggerBy,
  postId,
}: {
  type: NotificationsType;
  notifyTo: number;
  triggerBy: number;
  postId?: number;
}) {
  console.log({ type, triggerBy, notifyTo });

  const { data, error } = await supabase
    .from("Notifications")
    .insert([{ type, notifyTo, triggerBy, postId, isRead: false }])
    .select();

  // we dont want to throw an error because it will stop mutation ( following, liking a post...)
  // it's okay to not create a notification , but not okay to stop mutation just because of notification error
  if (error) console.log(error);
}

export async function getAllNotificationsById(accountId: number) {
  const { data, error } = await supabase
    .from("Notifications")
    .select("*")
    .eq("notifyTo", accountId);

  if (error) {
    console.log(error);
    throw new Error("Notifications could not be loaded");
  }

  return data;
}
