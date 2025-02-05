import { useEffect, useRef } from "react";

function App() {
  const divRef = useRef();
  useEffect(() => {
    console.log(divRef.current);
  }, []);
  return (
    <div>
      <div ref={divRef}>Hello</div>
    </div>
  );
}

export default App;
