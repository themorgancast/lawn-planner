import { createContext, useReducer } from "react";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

function cartReducer(cartList, action) {
  switch(action.type) {
    case "add":
      const itemExists = cartList.find((item) => item.id === action.id);
      if (itemExists) {
        return cartList.map(cartItem => 
          cartItem.id === action.id ? 
            {
              ...cartItem, 
              name: cartItem.name, 
              price: cartItem.price, 
              quantity: cartItem.quantity + 1,
              applicationDate: cartItem.applicationDate
            }
          : cartItem
        )
      } else {
        return [...cartList, {
        id: action.id,
        name: action.name,
        price: action.price,
        quantity: 1,
        applicationDate: action.applicationDate
      }];
    }
    case "remove":
      return cartList.filter(item => item.id !== action.id);
    default: 
      throw Error('Unknown action: ' + action.type);
  }
}

const CartContextProvider = ({ children }) => {
const [cartList, dispatch] = useReducer(cartReducer, []);

return (
  <CartContext value={cartList}>
    <CartDispatchContext value={dispatch}>
      {children}
    </CartDispatchContext>
  </CartContext>
)
}


export default CartContextProvider;