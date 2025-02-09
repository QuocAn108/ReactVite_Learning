import { createContext, useState } from "react";
import ListUser from "./components/ListUser";

export const ThemeContext = createContext();
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ListUser />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
