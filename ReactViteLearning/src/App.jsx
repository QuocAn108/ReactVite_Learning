import { useState } from "react";
function App() {
  const [username, setUsername] = useState();
  const handleGetUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <>
      <div>Username: {username}</div>
      <input type="text" onChange={(e) => handleGetUsername(e)} />
    </>
  );
}

export default App;
