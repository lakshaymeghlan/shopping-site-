import Data from "../db";
import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <div className="container">
        <h1 className="second_head">PRODUCTS</h1>
        <div className="app col-10 mx-auto col-md-6 col-lg-3 my-3">
          <div className="products ">
            {Data.products.map((product) => {
              return (
                <>
                  <Link to={`/products_details/${product.id}`}>
                    <h4 className="anchor_cls">{product.name}</h4>
                  </Link>
                  <img src={product.small} alt={product.name} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
