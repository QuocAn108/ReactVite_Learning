import Category from "./components/Category";
import NotCategory from "./components/NotCategory";

function App() {
  const check = false;
  if (check) {
    return <Category />;
  } else {
    return <NotCategory />;
  }
}

export default App;
