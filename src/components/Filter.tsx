import type { FilterType } from "../redux/features/todo/todo.types";
import { setFilter } from "../redux/features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const filters: FilterType[] = ["all", "active", "completed"];

const Filter = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector((state) => state.todo.filter);

  return (
    <div className="flex w-fit items-center rounded-2xl border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      {filters.map((filter) => {
        const isActive = currentFilter === filter;

        return (
          <button
            key={filter}
            onClick={() => dispatch(setFilter(filter))}
            className={`rounded-xl px-4 py-1.5 text-sm font-medium capitalize transition
              ${
                isActive
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }
            `}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
