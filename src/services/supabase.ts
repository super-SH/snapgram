import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASR_URL;
export const supabaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseApiKey);
