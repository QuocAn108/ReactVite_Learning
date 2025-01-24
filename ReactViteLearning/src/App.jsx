import { useState } from "react";
import Content from "./components/Content";
function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <button onClick={handleShow}>Show</button>
      {show && <Content />}
    </>
  );
}

export default App;
