import Hello from "./components/Hello";
import TestProp from "./components/TestProp";
function App() {
  const username = "An đẹp trai";
  const getUserName = () => {
    return username;
  };
  return (
    <>
      <Hello getUserName={getUserName} />
      <TestProp name="Tôi đang test prop" content="Hi" />
      <TestProp name="Tôi đẹp trai" content="A nhon ha se o" />
      <TestProp name="Tôi test prop" content="Bonjour" />
    </> // This is a fragment. It is used to return multiple elements from a component.
  );
}

export default App;
