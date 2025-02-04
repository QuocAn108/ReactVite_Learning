import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(1);
  const [post, setPosts] = useState([]);
  const [color, setColor] = useState("");
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json));
  // }, []);
  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  useEffect(() => {
    if (count % 2 == 0) {
      setColor("red");
    } else {
      setColor("blue");
    }
  }, [count]);
  return (
    <div>
      <div>{count}</div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
        }}
      ></div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {/* {post.map((post, index) => {
        return <div key={index}>{post.title}</div>;
      })} */}
    </div>
  );
}

export default App;
