import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>Hello Everyone</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
}

export default App;
