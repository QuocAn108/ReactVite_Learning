function TestProp(data, content) {
  console.log(data, content);
  return (
    <>
      <h1>
        {data.content}, {data.name}
      </h1>
    </>
  );
}
export default TestProp;
//data is a prop that is passed to the component. It can be accessed using data.propName
