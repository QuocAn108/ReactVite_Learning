import { useState } from "react";
function App() {
  const colors = ["red", "green", "blue"];
  const [color, setColor] = useState("red");
  const handleSetColor = (index) => {
    setColor(colors[index]);
  };
  return (
    <>
      <div
        style={{
          background: color,
          width: "70px",
          height: "30px",
          marginBottom: "10px",
        }}
      ></div>
      <div>
        <button onClick={() => handleSetColor(0)}>Red</button>
        <button onClick={() => handleSetColor(1)}>Green</button>
        <button onClick={() => handleSetColor(2)}>Blue</button>
      </div>
    </>
  );
}

export default App;
