export default function Message() {
  const handleClick = () => {
    alert("Hello, World!");
  };
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          alert("Hello, World!"); // This is an anonymous function, inline
        }}
      >
        Click me2
      </button>
    </>
  );
}
