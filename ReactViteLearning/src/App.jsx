import { useState } from "react";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleIncrement2 = () => {
    setCount2(count2 + 1);
  };
  console.log("rendered dad");
  return (
    <>
      {count}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleIncrement2}>Increment2</button>
      <Content count={count} />
    </>
  );
}

export default App;
