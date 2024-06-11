import { Table } from "../Table/Table";
import { Total } from "../Total/Total";
import { Coupon } from "../Coupon/Coupon";

import "./cart.scss";

export const Cart = () => {
  return (
    <div className="cart-content">
      <div className="content">
        <h2>My Shopping Cart</h2>
        <div className="cart-wrap">
          <div className="table-wrap">
            <Table />
            <Coupon />
          </div>
          <Total />
        </div>
      </div>
    </div>
  );
};
