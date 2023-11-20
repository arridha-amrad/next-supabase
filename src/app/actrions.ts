"use server";

import createSupabaseServer from "@/supabase/Server";
import { revalidatePath } from "next/cache";

const supabase = createSupabaseServer();
export const toggleTodo = async (id: string, isComplete: boolean) => {
  await supabase
    .from("todos")
    .update({
      completed_at: new Date().toISOString(),
      is_complete: !isComplete,
    })
    .match({ id });
  revalidatePath("/todos");
};

export const deleteTodo = async (id: string) => {
  const { error, status } = await supabase.from("todos").delete().eq("id", id);
  revalidatePath("/todos");
};
