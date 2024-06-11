import Close from "../../media/Close.svg";
import { removeFromCart } from "../../redux/actions";

import { useSelector, useDispatch } from "react-redux";
import { Quantity } from "../Quantity/Quantity";
import { Link } from "react-router-dom";

import "./table.scss";

export const Table = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <table cellSpacing="20">
      <thead>
        <tr>
          <th>Product</th>
          <th>price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map(
          ({ id, price, imgSrc, name, quantity, discountPrice }) => (
            <tr key={id} className="cart-item">
              <th className="name">
                <img src={imgSrc} alt={name} />
                <span>{name}</span>
              </th>
              <th className="price">
                {discountPrice
                  ? `\$${discountPrice.toFixed(2)}`
                  : `\$${price.toFixed(2)}`}
              </th>
              <th className="quantity">
                <Quantity id={id} quantity={quantity} />
              </th>
              <th className="subtotal">
                {discountPrice
                  ? `\$${(discountPrice * quantity).toFixed(2)}`
                  : `\$${(price * quantity).toFixed(2)}`}
              </th>
              <th className="delete">
                <button onClick={() => handleDelete(id)}>
                  <img src={Close} alt="delete" />
                </button>
              </th>
            </tr>
          )
        )}
        <tr>
          <th className="back-link">
            <Link to="/" className="return">
              Return to shop
            </Link>
          </th>
        </tr>
      </tbody>
    </table>
  );
};
