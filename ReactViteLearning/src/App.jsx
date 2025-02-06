import { useCallback, useState } from "react";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("rendered dad");
  return (
    <>
      {count}
      <Content handleIncrement={handleIncrement} />
    </>
  );
}

export default App;
