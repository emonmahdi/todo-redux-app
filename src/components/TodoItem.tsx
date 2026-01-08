import { useState, type ChangeEvent } from "react";
import type { Todo } from "../redux/features/todo/todo.types";
import { useAppDispatch } from "../redux/hooks";
import {
  deleteTodo,
  editTodo,
  toggleTodo,
} from "../redux/features/todo/todoSlice";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [text, setText] = useState<string>(todo.text);

  const handleSave = () => {
    if (!text.trim()) return;
    dispatch(editTodo({ id: todo.id, text }));
    setIsEdit(false);
  };

  return (
    <li className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
      {/* Left Section */}
      <div className="flex flex-1 items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          className="h-5 w-5 accent-indigo-600"
        />

        {isEdit ? (
          <input
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-1.5 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:text-slate-100 dark:focus:ring-indigo-500/30"
          />
        ) : (
          <span
            className={`text-sm transition ${
              todo.completed
                ? "text-slate-400 line-through"
                : "text-slate-800 dark:text-slate-100"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2   transition  ">
        {isEdit ? (
          <button
            onClick={handleSave}
            className="rounded-lg bg-green-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-green-600 active:scale-95"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="rounded-lg bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-indigo-600 active:scale-95"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="rounded-lg bg-red-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-600 active:scale-95"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
