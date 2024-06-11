import { useState, useEffect } from "react";
import jsonData from "../../products.json";
import { Product } from "../Product/Product";
import "./products.scss";

export const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className="products-content">
      <div className="content">
        <h2>Popular Products</h2>
        <div className="products">
          {data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
