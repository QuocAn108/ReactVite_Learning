// eslint-disable-next-line react/prop-types
function TestProp({ name = "Tôi đang test", content: message }) {
  // const { name, content } = props; // This is called destructuring. It is used to extract values from an object and assign them to variables.
  return (
    <>
      <h1>
        {message}, {name}
      </h1>
    </>
  );
}
export default TestProp;
//data is a prop that is passed to the component. It can be accessed using data.propName
