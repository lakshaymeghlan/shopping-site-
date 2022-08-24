import axios from "axios";

export const wishlistApiCall = async () => {
  const wishlistCall = await axios
    .get("http://localhost:8080/wishlist/wishlist")
    .then((res) => {
      return res;
    });
  return wishlistCall;
};

export const wishlistSaveApi = async (product) => {
  const wishlistCall = await axios
    .post("http://localhost:8080/wishlist/wishlist", product)
    .then(console.log(product));
  return wishlistCall;
};

export const wishlistProductApi = async (userId) => {
    const wishlistProductApi = await axios
      .get(`http://localhost:8080/wishlist/wishlistProduct/${id}`, userId)
      .then(console.log(userId));
    return wishlistProductApi;
  };
