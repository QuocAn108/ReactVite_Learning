import { useState } from "react";
function App() {
  const [chooseProduct, serChooseProduct] = useState([]);
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];
  const handleChooseProduct = (id) => {
    if (!chooseProduct.includes(+id)) {
      serChooseProduct((prev) => {
        return [...prev, +id];
      });
    } else {
      serChooseProduct((prev) => {
        return prev.filter((item) => item !== +id);
      });
    }
  };
  console.log(chooseProduct);
  return (
    <>
      <div>
        {products.map((product, index) => {
          return (
            <div key={index}>
              <label>{product.name}</label>
              <input
                type="checkbox"
                value={product.id}
                onChange={(e) => handleChooseProduct(e.target.value)}
                checked={chooseProduct.includes(product.id)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
