import "./product.scss";
import Cart from "../../media/Bag.svg";
import Wishlist from "../../media/Heart.svg";
import Eye from "../../media/Eye 1.svg";
import Rating from "../../media/Rating.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";

export const Product = ({
  product: { id, name, discountPrice, price, imgSrc },
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({ name, discountPrice, price, imgSrc, id, quantity: 1 })
    );
  };

  return (
    <div className="product">
      {discountPrice && <div className="sale">Sale 50%</div>}
      <div className="hover-block">
        <a href="/" className="icon hover-block-item">
          <img src={Wishlist} alt="Wishlist"></img>
        </a>
        <a href="/" className="icon hover-block-item">
          <img src={Eye} alt="Eye"></img>
        </a>
      </div>
      <img src={imgSrc} alt={name} />
      <div className="product-info">
        <div className="product-label">
          <div className="product-name">{name}</div>
          <div className="product-price">
            {discountPrice
              ? `\$${discountPrice.toFixed(2)}`
              : `\$${price.toFixed(2)}`}
            &nbsp;
            {discountPrice && (
              <span className="product-price__discount">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
          <img src={Rating} alt="rating"></img>
        </div>
        <button className="icon add-to-cart" onClick={handleAddToCart}>
          <img src={Cart} alt="add to cart"></img>
        </button>
      </div>
    </div>
  );
};
