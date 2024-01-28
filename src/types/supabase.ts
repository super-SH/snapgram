type NotificationsType = "like-post" | "comment-post" | "follow";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      Accounts: {
        Row: {
          accountId: string;
          bio: string | null;
          created_at: string;
          email: string;
          id: number;
          name: string | null;
          profileImgName: string | null;
          profileUrl: string | null;
          username: string | null;
        };
        Insert: {
          accountId: string;
          bio?: string | null;
          created_at?: string;
          email: string;
          id?: number;
          name?: string | null;
          profileImgName?: string | null;
          profileUrl?: string | null;
          username?: string | null;
        };
        Update: {
          accountId?: string;
          bio?: string | null;
          created_at?: string;
          email?: string;
          id?: number;
          name?: string | null;
          profileImgName?: string | null;
          profileUrl?: string | null;
          username?: string | null;
        };
        Relationships: [];
      };
      Comments: {
        Row: {
          authorId: number | null;
          commentText: string | null;
          created_at: string;
          id: number;
          postId: number | null;
        };
        Insert: {
          authorId?: number | null;
          commentText?: string | null;
          created_at?: string;
          id?: number;
          postId?: number | null;
        };
        Update: {
          authorId?: number | null;
          commentText?: string | null;
          created_at?: string;
          id?: number;
          postId?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "Comments_authorId_fkey";
            columns: ["authorId"];
            isOneToOne: false;
            referencedRelation: "Accounts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Comments_postId_fkey";
            columns: ["postId"];
            isOneToOne: false;
            referencedRelation: "Posts";
            referencedColumns: ["id"];
          },
        ];
      };
      Follows: {
        Row: {
          created_at: string;
          followedById: number | null;
          followToId: number | null;
          id: number;
        };
        Insert: {
          created_at?: string;
          followedById?: number | null;
          followToId?: number | null;
          id?: number;
        };
        Update: {
          created_at?: string;
          followedById?: number | null;
          followToId?: number | null;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "Follows_followedById_fkey";
            columns: ["followedById"];
            isOneToOne: false;
            referencedRelation: "Accounts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Follows_followToId_fkey";
            columns: ["followToId"];
            isOneToOne: false;
            referencedRelation: "Accounts";
            referencedColumns: ["id"];
          },
        ];
      };
      Likes: {
        Row: {
          accountId: number | null;
          created_at: string;
          id: number;
          postId: number | null;
        };
        Insert: {
          accountId?: number | null;
          created_at?: string;
          id?: number;
          postId?: number | null;
        };
        Update: {
          accountId?: number | null;
          created_at?: string;
          id?: number;
          postId?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "Likes_accountId_fkey";
            columns: ["accountId"];
            isOneToOne: false;
            referencedRelation: "Accounts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Likes_postId_fkey";
            columns: ["postId"];
            isOneToOne: false;
            referencedRelation: "Posts";
            referencedColumns: ["id"];
          },
        ];
      };
      Notifications: {
        Row: {
          created_at: string;
          id: number;
          isRead: boolean | null;
          notifyTo: number;
          postId: number | null;
          triggerBy: number;
          type: NotificationsType;
        };
        Insert: {
          created_at?: string;
          id?: number;
          isRead?: boolean | null;
          notifyTo: number;
          postId?: number | null;
          triggerBy: number;
          type?: NotificationsType;
        };
        Update: {
          created_at?: string;
          id?: number;
          isRead?: boolean | null;
          notifyTo?: number;
          postId?: number | null;
          triggerBy?: number;
          type?: NotificationsType;
        };
        Relationships: [
          {
            foreignKeyName: "Notifications_notifyTo_fkey";
            columns: ["notifyTo"];
            isOneToOne: false;
            referencedRelation: "Accounts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Notifications_postId_fkey";
            columns: ["postId"];
            isOneToOne: false;
            referencedRelation: "Posts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Notifications_triggerBy_fkey";
            columns: ["triggerBy"];
            isOneToOne: false;
            referencedRelation: "Accounts";
            referencedColumns: ["id"];
          },
        ];
      };
      Posts: {
        Row: {
          caption: string;
          created_at: string;
          creator: number | null;
          id: number;
          imageUrl: string | null;
          location: string | null;
          tags: string[];
        };
        Insert: {
          caption: string;
          created_at?: string;
          creator?: number | null;
          id?: number;
          imageUrl?: string | null;
          location?: string | null;
          tags: string[];
        };
        Update: {
          caption?: string;
          created_at?: string;
          creator?: number | null;
          id?: number;
          imageUrl?: string | null;
          location?: string | null;
          tags?: string[];
        };
        Relationships: [
          {
            foreignKeyName: "Posts_creator_fkey";
            columns: ["creator"];
            isOneToOne: false;
            referencedRelation: "Accounts";
            referencedColumns: ["id"];
          },
        ];
      };
      SavedPosts: {
        Row: {
          accountId: number | null;
          created_at: string;
          id: number;
          postId: number | null;
        };
        Insert: {
          accountId?: number | null;
          created_at?: string;
          id?: number;
          postId?: number | null;
        };
        Update: {
          accountId?: number | null;
          created_at?: string;
          id?: number;
          postId?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "SavedPosts_accountId_fkey";
            columns: ["accountId"];
            isOneToOne: false;
            referencedRelation: "Accounts";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "SavedPosts_postId_fkey";
            columns: ["postId"];
            isOneToOne: false;
            referencedRelation: "Posts";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never;
