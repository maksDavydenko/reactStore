import "./total.scss";
import { useSelector } from "react-redux";

import { totalPrice } from "../../helpers/totalPrice";
export const Total = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const isDiscount = useSelector((state) => state.isDiscount);

  const total = totalPrice(cartItems);

  return (
    <div className="total">
      <h3>Cart Total</h3>
      <ul>
        <li>
          Subtotal:<span>${total.toFixed(2)}</span>
        </li>
        <li>
          Shipping:<span>Free</span>
        </li>
        {isDiscount && (
          <li>
            Discount: <span>${(total * 0.2).toFixed(2)}</span>
          </li>
        )}
        <li>
          Total:
          <span>
            $
            {isDiscount && total > 0
              ? (total * 0.8).toFixed(2)
              : total.toFixed(2)}
          </span>
        </li>
      </ul>
      <a href="#">Proceed to checkout</a>
    </div>
  );
};
