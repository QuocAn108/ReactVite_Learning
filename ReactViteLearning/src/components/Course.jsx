export default function Course() {
  const course = [
    { name: "React", price: 1000 },
    { name: "Vue", price: 2000 },
    { name: "Angular", price: 3000 },
  ];
  return (
    <div>
      <h1>Course</h1>
      <ul>
        {course.map((item, index) => {
          return (
            <>
              {item.price > 500 ? (
                <li key={index}>
                  {item.name} - {item.price}
                </li>
              ) : (
                <li key={index}>
                  {item.name} - {item.price} - Discounted
                </li>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
}
