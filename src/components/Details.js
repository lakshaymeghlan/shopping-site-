import Data from "../db.json";
import { useParams, Link } from "react-router-dom";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "./redux/cart";
import { wishlistAction } from "./redux/wishlist_redux";
import { FaRegHeart } from "react-icons/fa";

var axios = require("axios");
var data = JSON.stringify({
  productId: "2",
  productName: "air jordan",
  productPrice: "30000",
});

var config = {
  method: "post",
  url: "http://localhost:8080/auth/wishlist",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

const Details = () => {
  //todo call get productsAPIs in use effects
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // add to wishlist handler calls add to  wishlist api refence by api
  const addToCart = (product) => {
    console.log(product["id"], product["name"], product["price"]);
    const isAdded = cart.some((id) => {
      return id === product.id;
    });

    if (!isAdded) {
      dispatch(
        cartAction.add({
          id: product.id,
          name: product.name,
          price: product.price,
          amount: 1,
        })
      );
    } else {
      alert("Already Added");
    }
  };

  //wishlist
  const wishlist = useSelector((state) => state.wishlist);
  // add to wishlist handler calls add to  wishlist api refence by api
  const addToWishlist = (product) => {
    console.log(product["id"], product["name"], product["price"]);
    const isAdded = wishlist.some((id) => {
      return id === product.id;
    });

    if (!isAdded) {
      dispatch(
        wishlistAction.add({
          id: product.id,
          name: product.name,
          price: product.price,
          amount: 1,
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
  // console.log(product_detail);

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
                <h2>{product_detail.price}</h2>
                <Link to="/cart">
                  <button
                    className="sign_up"
                    onClick={addToCart.bind(this, product_detail)}
                  >
                    Buy Now
                  </button>
                </Link>
                <Link to="/Wishlist">
                  <FaRegHeart
                    size={20}
                    className="whislist"
                    onClick={addToWishlist.bind(this, product_detail)}
                  ></FaRegHeart>
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
