import Data from "../db.json";
import React, { useState, useEffect } from "react";

function Details() {
  console.log(Data);
  let [products, setProducts] = useState(Data.products);

  const resetProducts = () => {
    setProducts(Data.products);
  };
  useEffect(() => {
    resetProducts();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="second_head">PRODUCTS DETAILS</h1>
        <div className="app col-10 mx-auto col-md-6 col-lg-3 my-3">
          <div className="products">
            {products.map((product, index) => {
             return <div key={product.id + "_" + index}>
               <h3 key={product.id + "h3" + index}>{product.name}</h3>
               <p key={product.desc + "p" + index}>{product.desc}</p>
                <img key={product.large + "" + index} src={product.large} alt={product.name} />
                 <button className="sign_up">Buy Now</button>
              </div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
