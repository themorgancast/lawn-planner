import { useContext, useState } from "react";
import { convertToDollars } from "../data/currency";
import { CartContext } from '../features/CartContext';
import { CartDispatchContext } from "../features/CartContext";

const Cart = ({ setPlan }) => {
  const cartList = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);
  const cartTotal = convertToDollars(
    cartList.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
  );

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
                <p className="item-details">{cartItem.name}</p>
                <p>{convertToDollars(cartItem.price)}</p>
                <p>Qty: {cartItem.quantity}</p>
                <button
                  className="btn remove" 
                  aria-label={`Remove ${cartItem.name}`}
                  onClick={() => 
                    dispatch({
                      type: "remove",
                      id: cartItem.id
                    })
                   }
                  >
                </button>
              </li>)
            }
          </ul>
        <div className="total">
          <h3>Total:</h3>
          <p>{cartTotal}</p>
        </div>
        </div>
      :
        <div className="empty-state">
          <p>No items added yet</p>
        </div>
      }
      <button className="btn primary full-width"
        onClick={() => setPlan(true)}
      >Generate Lawn Plan</button>
    </div>
  );
}

export default Cart;