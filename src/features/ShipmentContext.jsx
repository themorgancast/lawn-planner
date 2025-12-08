import { createContext, useReducer } from "react";
import { CartContext } from "./CartContext";

export const ShipmentContext = createContext(null);
const CartList = useContext(CartContext);

function groupShipments() {
  
}