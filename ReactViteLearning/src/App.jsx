function App() {
  const content1 = <div>This is content 1</div>;
  const content2 = <div>This is content 2</div>;
  const check = false;
  if (check) {
    return content1;
  }
  return content2;
}

export default App;
