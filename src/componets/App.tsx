import { useState, useEffect, useRef } from "react";
import { ITodo } from "../types/data";
import { TodoList } from "../componets/TodoList";

export const App: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, complete: !todo.complete };
      })
    );
  };

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDownEnter: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === "Enter") addTodo();
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current?.focus();
  }, []);

  return (
    <div className="todoBox">
      <div className="todoAdd">
        <input
          className="todoAddInput"
          value={value}
          onChange={handleChangeInput}
          onKeyDown={handleKeyDownEnter}
          ref={inputRef}
        />
        <button className="todoAddBtn" onClick={addTodo}>Добавить</button>
</div>
        <TodoList
          items={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
    </div>
  );
};
