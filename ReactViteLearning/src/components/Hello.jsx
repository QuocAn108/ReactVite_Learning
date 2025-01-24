function Hello(props) {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  return <h1>Hello {props.getUserName()} </h1>;
}
export default Hello;
