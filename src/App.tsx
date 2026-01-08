import Filter from "./components/Filter";
import TodoForm from "./components/TodoForm";
import TodoList from "./redux/features/todo/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 dark:bg-slate-950">
      {/* App Container */}
      <div className="mx-auto w-full max-w-2xl space-y-6">
        {/* Header */}
        <header className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-center shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Todo App
          </h2>
          <p className="mt-1 text-sm text-indigo-100">
            React • Redux Toolkit • TypeScript
          </p>
        </header>

        {/* Todo Form */}
        <div className="flex justify-center">
          <TodoForm />
        </div>

        {/* Filter */}
        <div className="flex justify-center">
          <Filter />
        </div>

        {/* Todo List */}
        <div className="rounded-3xl bg-white p-4 shadow-md dark:bg-slate-900">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
