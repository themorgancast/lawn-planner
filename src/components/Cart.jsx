import { useContext } from "react";
import { convertToDollars } from "../data/currency";
import { CartContext } from '../features/CartContext';
import { CartDispatchContext } from "../features/CartContext";

const Cart = () => {
  const cartList = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const cartTotal = convertToDollars(
    cartList.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0));

  return(
    <div className="cart">
      <h2>Your Subscription</h2>
      {cartList?.length ? 
        <div className="item-container">
          <ul>
            {cartList.map((cartItem) =>
              <li 
                className="item"
                key={cartItem.id}>
                {cartItem.name}
                {convertToDollars(cartItem.price)}
                Qty: {cartItem.quantity}
                <button className="btn secondary" 
                  onClick={() => 
                    dispatch({
                      type: "delete",
                      id: cartItem.id
                    })}
                  >Remove
                </button>
              </li>)
            }
          </ul>
        <div className="total">
          <p>{cartTotal}</p>
        </div>
        </div>
      :
        <div className="empty-state">
          <p>No items added yet</p>
        </div>
      }
      <button className="btn primary full-width">Generate Lawn Plan</button>
    </div>
  );
}

export default Cart;