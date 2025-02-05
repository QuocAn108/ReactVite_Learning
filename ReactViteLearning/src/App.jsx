import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  let timerId = useRef();
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>start</button>{" "}
      <button onClick={handleStop}>stop</button>
    </div>
  );
}

export default App;
