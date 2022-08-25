// import Data from "../db";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {  useSelector } from "react-redux";
// import { productAction } from "./redux/product_redux";
import productApiCall from "./productApiCall";

function Products() {
  const [productList, setProductList] = useState();
  useEffect(() => {
    productApiCall().then((res) => {
      setProductList(res);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="second_head">PRODUCTS</h1>
        <div className="app col-10 mx-auto col-md-6 col-lg-3 my-3">
          <div className="products ">
            {productList === undefined ? (
              <h1>Loading...</h1>
            ) : (
              productList.data.map((product) => {
               
                return (
                  <>
                    <Link
                      key={product.id}
                      to={`/products_details/${product._id}`}
                    >
                      <h4 className="anchor_cls">{product.name}</h4>
                    </Link>
                    <img src={product.small} alt={product.name} />
                  </>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
