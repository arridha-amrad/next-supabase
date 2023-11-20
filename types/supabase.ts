import { MergeDeep } from "type-fest";
import type { Database as DatabaseGenerated } from "./supabase-generated";
export type { Json } from "./supabase-generated";

export type Database = MergeDeep<
  DatabaseGenerated,
  {
    public: {
      Views: {
        todos_view: {
          Row: {
            id: number;
            is_complete: boolean;
            title: string;
            user_id: string;
          };
        };
      };
    };
  }
>;

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
export type Enums<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];
