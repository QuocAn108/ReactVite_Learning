import { useContext } from "react";
import { TodoContext } from "../Store/Context";

export default function Todolist() {
  const todoStore = useContext(TodoContext);
  const { dispath, state } = todoStore;
  console.log(state);
  return (
    <div>
      <input
        type="text"
        onChange={(e) =>
          dispath({
            type: "ON_CHANGE",
            payload: e.target.value,
          })
        }
      />
      <button
        type="button"
        onClick={() =>
          dispath({
            type: "ADD",
          })
        }
      >
        Add
      </button>
      <ul>
        {state.todos.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
