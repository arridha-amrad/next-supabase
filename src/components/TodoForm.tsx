import createSupabaseServer from "@/supabase/Server";
import { revalidatePath } from "next/cache";

const TodoForm = async () => {
  const addTodo = async (formData: FormData) => {
    "use server";
    const title = formData.get("title")?.toString();
    if (!title) return;
    const supabase = createSupabaseServer();
    await supabase.from("todos").insert({ title });
    revalidatePath("/todos");
  };
  return (
    <div className="my-4">
      <form action={addTodo} className="">
        <textarea
          id="title"
          className="resize-none outline-none bg-neutral-700 w-full rounded-lg focus:ring-2 focus:ring-offset-2 p-3 focus:ring-offset-black focus:ring-neutral-600"
          placeholder="Write your todo"
          name="title"
          rows={4}
        />
        <div className="bg-red items-center flex justify-between w-full">
          <div></div>
          <button className=" bg-neutral-700 px-4 py-2 rounded-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
