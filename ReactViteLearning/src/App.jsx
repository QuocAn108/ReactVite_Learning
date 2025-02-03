import { useState } from "react";
function App() {
  const [todo, setTodo] = useState({ id: "", name: "" });
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Danh rang rua mat" },
  ]);
  const handleGetTodo = (value) => {
    const randomId = Math.floor(Math.random(100000) * 100000);
    const todo = {
      id: randomId,
      name: value,
    };
    setTodo(todo);
  };
  const handleSubmit = () => {
    setTodoList([...todoList, todo]);
    setTodo({
      id: "",
      name: "",
    });
  };
  const handleDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => handleGetTodo(e.target.value)}
          value={todo.name}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div>
        <ul>
          {todoList.map((todo, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                }}
                key={index}
              >
                <li>{todo.name}</li>
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  X
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
