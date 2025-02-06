import { memo } from "react";

// eslint-disable-next-line react/prop-types
function Content({ handleIncrement }) {
  console.log("rendered child");
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default memo(Content);
