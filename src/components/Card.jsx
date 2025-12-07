import { useContext } from "react";
import { convertToDollars } from "../data/currency";
import { CartDispatchContext } from "../features/CartContext";

const Card = ({ product }) => {
  const dispatch = useContext(CartDispatchContext);

  return(
    <div className="product-card" key={product.id}>
      <img src={product.image} alt={product.name} />
      <div className="product-card-details">
        <p>{product.name}</p>
        <p className="price">{convertToDollars(product.price)}</p>
      </div>
      <div className="product-card-actions">
        <button className="btn secondary" 
          onClick={() => 
            dispatch({
              type: "add",
              id: product.id,
              name: product.name,
              price: product.price
            })}
          >Add to Subscription
        </button>
      </div>
    </div>
  );
}

export default Card;