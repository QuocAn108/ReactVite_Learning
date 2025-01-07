import MyHeader from "./components/Header";
import MyFooter from "./components/Footer";
function App() {
  return (
    <>
      <MyHeader />
      <div>Hello World</div>
      <MyFooter />
    </> // This is a fragment. It is used to return multiple elements from a component.
  );
}

export default App;
