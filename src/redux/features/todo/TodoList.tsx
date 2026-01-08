import TodoItem from "../../../components/TodoItem";
import { useAppSelector } from "../../hooks";
import type { Todo } from "./todo.types";

const TodoList = () => {
  const { todos, filter } = useAppSelector((state) => state.todo);

  const filteredTodos: Todo[] = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
