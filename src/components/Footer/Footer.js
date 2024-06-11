import { Logo } from "../Logo/Logo";
import "./footer.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="footer-content">
          <div className="info">
            <Logo color="#fff" />
            <p>
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>

            <a
              className="mail"
              href="mailto:Proxy@gmail.com
"
            >
              Proxy@gmail.com
            </a>
          </div>
          <div className="list-block">
            <h4>My Account</h4>
            <ul>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Order History</a>
              </li>
              <li>
                <a href="#">Shoping Cart</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
            </ul>
          </div>
          <div className="list-block">
            <h4>Helps</h4>
            <ul>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Faqs</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="list-block">
            <h4>Proxy</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
            </ul>
          </div>
          <div className="list-block">
            <h4>Categories</h4>
            <ul>
              <li>
                <a href="#">Fruit & Vegetables</a>
              </li>
              <li>
                <a href="#">Meat & Fish</a>
              </li>
              <li>
                <a href="#">Bread & Bakery</a>
              </li>
              <li>
                <a href="#">Beauty & Health</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          Ecobazar eCommerce © 2024. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
