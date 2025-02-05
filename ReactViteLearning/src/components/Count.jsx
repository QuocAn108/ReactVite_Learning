import { useLayoutEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState(1);
  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);
  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCount}>Add</button>
    </div>
  );
}
