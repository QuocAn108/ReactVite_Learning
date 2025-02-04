import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(1);
  const [post, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  useEffect(() => {
    console.log("useEffect");
  }, []);
  return (
    <div>
      <div>{count}</div>
      {console.log("render")}
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {post.map((post, index) => {
        return <div key={index}>{post.title}</div>;
      })}
    </div>
  );
}

export default App;
