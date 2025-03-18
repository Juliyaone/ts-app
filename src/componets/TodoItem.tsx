import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;


  return (
    <div className="todoItem">
      <input className="todoCheckbox" type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
      <p className="todoTitle">{title}</p>
      <button className="todoClose" onClick={() => removeTodo(id)}>X</button>
    </div>
  );
};

export { TodoItem };
