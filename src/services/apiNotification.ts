import { NotificationsType } from "@/types/supabase";
import { supabase } from "./supabase";
import { ExtendedNotification } from "@/types/collection";

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

  const { error } = await supabase
    .from("Notifications")
    .insert([{ type, notifyTo, triggerBy, postId, isRead: false }])
    .select();

  // we dont want to throw an error because it will stop mutation ( following, liking a post...)
  // it's okay to not create a notification , but not okay to stop mutation just because of notification error
  if (error) console.log(error);
}

export async function getAllNotificationsById(accountId?: number) {
  if (!accountId) throw new Error("Notifications could not be loaded");

  const { data, error } = await supabase
    .from("Notifications")
    .select("*, triggerBy(*), postId(*)")
    .order("created_at", { ascending: false })
    .eq("notifyTo", accountId)
    .returns<ExtendedNotification[]>();

  if (error) {
    console.log(error);
    throw new Error("Notifications could not be loaded");
  }

  return data;
}
