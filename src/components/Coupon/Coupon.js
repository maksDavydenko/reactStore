import { useState } from "react";
import CryptoJS from "crypto-js";

import "./coupon.scss";
import { applyPromoCode } from "../../redux/actions";
import { useDispatch } from "react-redux";

export const Coupon = () => {
  const [promoCode, setPromoCode] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const encryptedPromoCode = process.env.REACT_APP_CRYPTED_PROMO_CODE;
    const secretKey = process.env.REACT_APP_SECRET_KEY;

    const bytes = CryptoJS.AES.decrypt(encryptedPromoCode, secretKey);
    const decryptedPromoCode = bytes.toString(CryptoJS.enc.Utf8);

    if (promoCode === decryptedPromoCode) {
      dispatch(applyPromoCode());
    }
  };

  return (
    <div className="coupone">
      <h3>Coupon Code</h3>
      <form className="input-wrap" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Enter code"
        ></input>
        <button>Apply Coupon</button>
      </form>
    </div>
  );
};
