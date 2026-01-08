import { createSlice } from "@reduxjs/toolkit";
import type { FilterType, Todo } from "./todo.types";

interface TodoState{
    todos: Todo[],
    filter: FilterType
}

const loadTodos = (): Todo[] => {
    const data = localStorage.getItem('todos')
    return data ? (JSON.parse(data) as Todo[]) : [];
}

const savedTodos = (todos: Todo[]): void => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

export const  initialState: TodoState ={
  todos: loadTodos(),
  filter: "all"
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{}
});

export default todoSlice.reducer