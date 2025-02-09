import { useContext, useEffect } from "react";
import { ThemeContext } from "../App";

export default function User() {
  const themeData = useContext(ThemeContext);
  const { theme, setTheme } = themeData;
  console.log(themeData);

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#333" : "#fff";
  }, [theme]);

  return (
    <>
      <ul className={theme}>
        <li>Username: AnHQ</li>
        <li>Age: 20</li>
        <li>Address: QT</li>
      </ul>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Click me
      </button>
    </>
  );
}
