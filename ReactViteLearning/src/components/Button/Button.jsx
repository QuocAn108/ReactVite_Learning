import styles from "./Button.module.css";
import className from "classnames";
// eslint-disable-next-line react/prop-types
export default function Button({ primary }) {
  return (
    <button
      className={className(styles.btn, {
        [styles.primary]: primary,
        [styles.default]: !primary,
      })}
    >
      Click me
    </button>
  );
}
