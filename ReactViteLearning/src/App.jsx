import { useState } from "react";
import Count from "./components/Count";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <Count />}
    </div>
  );
}

export default App;
