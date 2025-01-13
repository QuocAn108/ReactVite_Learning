import { useState } from "react";

function App() {
  const [count, setCount] = useState(() => {
    const number = 1 + 1 + 1;
    console.log(number);
    return number;
  });

  const handleClick = () => {
    setCount(count + 1);
    // setCount((prevCount) => prevCount + 1);  this is callback function
  };
  console.log("App render");
  return (
    <>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default App;
