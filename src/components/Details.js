import Data from "../db.json";
import { useParams, Link } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "./redux/cart";

const Details = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    const isAdded = cart.some((id) => {
      return id === product.id;
    });

    if (!isAdded) {
      dispatch(
        cartAction.add({
          id: product.id,
          name: product.name,
          price: product.price,
          amount: 1
        })
      );
    } else {
      alert("Already Added");
    }
  };


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
            {product_detail &&  (
              <div>
                <h3>{product_detail.name}</h3>
                <p>{product_detail.desc}</p>
                <img src={product_detail.large} alt={product_detail.name} />
                <h2>{product_detail.price}</h2>
                <Link to="/cart">
                  <button className="sign_up" onClick={addToCart.bind(this)}>Buy Now</button>
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
