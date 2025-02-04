import { useState } from "react";
import Timer from "./components/Timer";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <Timer />}
    </div>
  );
}

export default App;
