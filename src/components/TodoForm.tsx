import { useState, type FormEvent } from "react";
import { addTodo } from "../redux/features/todo/todoSlice";
import { useAppDispatch } from "../redux/hooks";

const TodoForm = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch(
      addTodo({
        id: Date.now(),
        text,
        completed: false,
      })
    );

    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:ring-indigo-500/30"
    >
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded-xl border border-slate-300 bg-transparent px-4 py-2 text-slate-800 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:ring-indigo-500/30"
      />

      <button
        type="submit"
        className="rounded-xl bg-indigo-600 px-5 py-2 font-medium text-white transition hover:bg-indigo-700 active:scale-95 disabled:opacity-50"
        disabled={!text.trim()}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
