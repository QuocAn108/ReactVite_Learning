import Product from "./components/Product";

function App() {
  const listProducts = [
    {
      url: "https://product.hstatic.net/200000722513/product/gearvn-laptop-lenovo-ideapad-slim-5-14imh9-83da001yvn-1_fe41e3e174ca423d95d3fd467b303941_grande.png",
      title: "Product 1",
      price: 100,
    },
    {
      url: "https://product.hstatic.net/200000722513/product/gearvn-laptop-lenovo-ideapad-slim-5-14imh9-83da001yvn-1_fe41e3e174ca423d95d3fd467b303941_grande.png",
      title: "Product 2",
      price: 200,
    },
    {
      url: "https://product.hstatic.net/200000722513/product/gearvn-laptop-lenovo-ideapad-slim-5-14imh9-83da001yvn-1_fe41e3e174ca423d95d3fd467b303941_grande.png",
      title: "Product 3",
      price: 300,
    },
  ];
  return (
    <>
      {listProducts.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          url={product.url}
          price={product.price}
        />
      ))}
    </> // This is a fragment. It is used to return multiple elements from a component.
  );
}

export default App;
