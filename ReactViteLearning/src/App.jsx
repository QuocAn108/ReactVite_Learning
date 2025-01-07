import TestProp from "./components/TestProp";
function App() {
  return (
    <>
      <TestProp name="Tôi đang test prop" content="Hi" />
      <TestProp name="Tôi đang test " content="A nhon ha se o" />
      <TestProp name="Tôi test prop" content="Bonjour" />
    </> // This is a fragment. It is used to return multiple elements from a component.
  );
}

export default App;
