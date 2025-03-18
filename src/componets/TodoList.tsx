import { TodoItem } from "./TodoItem";

import { ITodo } from "../types/data";
import "../componets/style.css";

interface ITodolistProps {
  items: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodolistProps> = (props) => {
  const { items, toggleTodo, removeTodo } = props;

  return (
    <div className="todoList">
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </div>
  );
};

export { TodoList };
