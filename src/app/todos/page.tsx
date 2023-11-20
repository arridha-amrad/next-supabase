import TodoCard from "@/components/TodoCard";
import TodoForm from "@/components/TodoForm";
import createSupabaseServer from "@/supabase/Server";
import { redirect } from "next/navigation";

const TodosPage = async () => {
  const supabase = createSupabaseServer();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/signin");
  }

  const { data } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="container mx-auto">
      <section className="max-w-sm mx-auto border border-neutral-600 p-4 my-4">
        <h1>Todos Page</h1>
        <TodoForm />
        <section className="space-y-2">
          {data && data.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
        </section>
      </section>
    </main>
  );
};

export default TodosPage;
