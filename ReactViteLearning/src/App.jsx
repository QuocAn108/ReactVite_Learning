import { useMemo, useState } from "react";

function App() {
  const [courses, setCourse] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const handleAdd = () => {
    const course = {
      name,
      price,
    };
    setCourse((prev) => [...prev, course]);
  };
  // const total = courses.reduce((acc, course) => acc + Number(course.price), 0);
  const total = useMemo(() => {
    return courses.reduce((acc, course) => acc + Number(course.price), 0);
  }, [courses]);
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="Course Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Course Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button onClick={handleAdd}>Add</button>
        <div>Total:{total}</div>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              {course.name} - {course.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
