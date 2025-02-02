import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Danh rang rua mat" },
  ]);
  const handleGetTodo = (value) => {
    console.log(value);
  };
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => handleGetTodo(e.target.value)} />
        <button>Add</button>
      </div>
      <div>
        <ul>
          {todoList.map((todo, index) => {
            return <li key={todo.id}>{todo.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
