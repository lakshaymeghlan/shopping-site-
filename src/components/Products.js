import Data from "../db.json";
import React from "react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { cartAction } from "./redux/cart";

function Products() {
  // const cart = useSelector((state) => state.cart);
  // const dispatch = useDispatch();

  // const addToCart = (product) => {
  //   const isAdded = cart.some((e) => {
  //     return e.id === product.id;
  //   });

  //   if (!isAdded) {
  //     dispatch(
  //       cartAction.add({
  //         id: product.id,
  //         name: product.name,
  //         price: product.price,
  //         amount: 1
  //       })
  //     );
  //   } else {
  //     alert("Already Added");
  //   }
  // };
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
                  {/* <button className="sign_up" onClick={addToCart.bind(this, e)}></button> */}
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
