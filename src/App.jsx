import "./App.css";
import { getProducts } from "./data/products";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Shipment from "./components/Shipment";
import CartContextProvider from "./features/CartContext";

function App() {
  const products = getProducts();
  const [productList, setProductList] = useState();
  const [plan, setPlan] = useState(false);

  useEffect(() => {
    products.then(data => setProductList(data));
  }, []);

  return (
    <div className="main-container">
      <CartContextProvider>
        <div className="products-container">
          <h2>Customize Your Lawn Subscription</h2>
          <div className="products">
            {productList ? productList.map((product) => ( /* TODO Memoize */
              <Card className="product-card" product={product} key={product.id}></Card>
            )) : 
            <div>Loading...</div>
            }
          </div>
        </div>
        <Cart setPlan={setPlan} />
        <Shipment generatePlan={plan} />
      </CartContextProvider>
    </div>
  );
}

export default App;
