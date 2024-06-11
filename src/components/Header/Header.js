import Wishlist from "../../media/Heart.svg";
import Cart from "../../media/Bag.svg";
import "./header.scss";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { totalPrice } from "../../helpers/totalPrice";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <header>
      <div className="content">
        <div className="header-wrap">
          <Logo />
          <div className="nav">
            <a href="/">
              <img src={Wishlist} />
            </a>
            <Link to="/cart" className="cart">
              <div className="cart-icon">
                <img src={Cart} />
                {cartItems.length > 0 && (
                  <div className="cart-count">{cartItems.length}</div>
                )}
              </div>
              <div className="cart-label">
                <p>Shopping cart:</p>
                {cartItems.length > 0 && (
                  <span>${totalPrice(cartItems).toFixed(2)}</span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
