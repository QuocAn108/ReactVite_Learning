import { useState } from "react";
function App() {
  const [username, setUsername] = useState();
  const handleGetUsername = (e) => {
    setUsername(e.target.value);
  };
  console.log(username);
  return (
    <>
      <input type="text" onChange={(e) => handleGetUsername(e)} />
    </>
  );
}

export default App;
