import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log(count);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>{count}</div>;
}
