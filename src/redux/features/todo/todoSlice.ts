import { createSlice } from "@reduxjs/toolkit";
import type { FilterType, Todo } from "./todo.types";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  todos: Todo[];
  filter: FilterType;
}

const loadTodos = (): Todo[] => {
  const data = localStorage.getItem("todos");
  return data ? (JSON.parse(data) as Todo[]) : [];
};

const savedTodos = (todos: Todo[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const initialState: TodoState = {
  todos: loadTodos(),
  filter: "all",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      savedTodos(state.todos);
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      savedTodos(state.todos);
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      savedTodos(state.todos);
    },

    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
      }
      savedTodos(state.todos);
    },

    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo, setFilter } =
  todoSlice.actions;

export default todoSlice.reducer