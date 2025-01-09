import Happy from "./components/Happy";
import UnHappy from "./components/UnHappy";

function App() {
  const isHappy = false;
  return <div>{isHappy ? <Happy /> : <UnHappy />}</div>;
}

export default App;
