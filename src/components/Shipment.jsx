import { useContext } from "react";
import { CartContext } from "../features/CartContext";

const Shipment = ({ generatePlan }) => {
  const cartList = useContext(CartContext);

  return(
    <div className="shipments">
      <h2>Shipments</h2>
      {generatePlan && cartList.length ? (
        <div className="plan-generated">
          <div>
            <h3>Shipment One</h3>
            {cartList.map((cartItem) =>
              <div>Application date for {cartItem.name}: {cartItem.applicationDate}</div>
            )}
          </div>
        </div>
      ) : (
        <div className="empty-state">
          <p>Generate a lawn plan to see shipments</p>
        </div>
      )}
    </div>
  );
}

export default Shipment;