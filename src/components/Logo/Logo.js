import LogoSrc from "../../media/logo-small.svg";
import "./logo.scss";
import { Link } from "react-router-dom";

export const Logo = ({ color }) => {
  return (
    <Link to="/" className="logo">
      <img src={LogoSrc} alt="ecobazar" />
      <h2 style={{ color: color }}>Ecobazar</h2>
    </Link>
  );
};
