import styles from "./assets/App.module.css";
import classNames from "classnames";
function App() {
  const { heading, text, bg } = styles;
  return (
    <>
      <div className={classNames(heading, text, bg)}>Hello everyone</div>
    </>
  );
}

export default App;
