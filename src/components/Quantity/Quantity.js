import { useDispatch } from "react-redux";
import { setQuantity } from "../../redux/actions";

import "./quantity.scss";

export const Quantity = ({ id, quantity }) => {
  const dispatch = useDispatch();

  const handleChangeQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      return;
    } else {
      dispatch(setQuantity(productId, newQuantity));
    }
  };

  return (
    <div className="quantity-wrap">
      <button onClick={() => handleChangeQuantity(id, quantity - 1)}>-</button>
      <input type="number" readOnly value={quantity} />
      <button onClick={() => handleChangeQuantity(id, quantity + 1)}>+</button>
    </div>
  );
};
