import { memo } from "react";

// eslint-disable-next-line react/prop-types
function Content({ count }) {
  console.log("rendered child");
  return <div>Hello {count}</div>;
}

export default memo(Content);
