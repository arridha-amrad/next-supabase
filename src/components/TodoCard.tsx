"use client";

import { deleteTodo, toggleTodo } from "@/app/actrions";
import { Tables } from "../../types/supabase";

const TodoCard = ({ todo }: { todo: Tables<"todos"> }) => {
  const date = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "short",
    timeStyle: "medium",
    hour12: true,
  }).format(new Date(todo.created_at));
  const completedAt =
    todo.completed_at &&
    new Intl.DateTimeFormat("id-ID", {
      dateStyle: "short",
      timeStyle: "medium",
      hour12: true,
    }).format(new Date(todo.completed_at));

  return (
    <article className="text-sm border border-neutral-600 p-2">
      <div>id: {todo.id}</div>
      <div>title: {todo.title}</div>
      <div>status: {todo.is_complete ? "Done" : "Not-done"}</div>
      <div>createdAt: {date}</div>
      {todo.is_complete && <div>completedAt: {completedAt}</div>}
      <div className="flex items-center justify-start gap-2 my-2">
        <button
          onClick={() => toggleTodo(todo.id, todo.is_complete)}
          className={`w-max px-2 py-1 rounded-lg text-xs text-black ${
            todo.is_complete ? "bg-neutral-600" : "bg-green-500"
          }`}
        >
          {todo.is_complete ? "undo" : "done"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className={`w-max px-2 py-1 rounded-lg text-xs text-white bg-red-500`}
        >
          del
        </button>
      </div>
    </article>
  );
};

export default TodoCard;
