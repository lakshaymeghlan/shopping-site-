import Data from "../db.json";
import { useParams, Link } from "react-router-dom";
import React from "react";

const Details = () => {
  const params = useParams();
  console.log(params.product_id);

  const product_detail = Data.products.find((detail) => {
    console.log(detail);
    return detail.id == params.product_id;
  });
  console.log(product_detail);

  return (
    <>
      <div className="container">
        <h1 className="second_head">PRODUCTS DETAILS</h1>
        <div className="app col-10 mx-auto col-md-6 col-lg-3 my-3">
          <div className="products">
            {product_detail && (
              <div>
                <h3>{product_detail.name}</h3>
                <p>{product_detail.desc}</p>
                <img src={product_detail.large} alt={product_detail.name} />
                <Link to="Cart">
                  {" "}
                  <button className="sign_up">Buy Now</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

