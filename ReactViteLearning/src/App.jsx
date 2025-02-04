import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("re-render");
  });
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
