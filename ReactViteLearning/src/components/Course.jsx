export default function Course() {
  const course = ["React", "Vue", "Angular"];
  return (
    <>
      <ul>
        {course.map((course, index) => {
          return <li key={index}>{course}</li>;
        })}
      </ul>
    </>
  );
}
