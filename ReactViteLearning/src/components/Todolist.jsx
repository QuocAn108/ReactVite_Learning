import { useContext } from "react";
import { TodoContext } from "../Store/Context";

export default function Todolist() {
  const todoStore = useContext(TodoContext);
  const { dispath, state } = todoStore;

  const handleAdd = () => {
    dispath({
      type: "ADD",
    });
  };

  const handleDelete = (index) => {
    dispath({
      type: "DELETE",
      payload: index,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={state.currentInput}
        onChange={(e) =>
          dispath({
            type: "ON_CHANGE",
            payload: e.target.value,
          })
        }
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <ul>
        {state.todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button type="button" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
