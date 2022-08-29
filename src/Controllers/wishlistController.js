import Wishlist from "../Schema/Wishlist";
import _ from "lodash";
// var Joi = require('joi')
// import Joi from "joi";

// export const validationMiddleware = (req, res, next) => {
//   console.log(req.body);
//   const schema = Joi.object({
//     productId: Joi.string().required(),
//     productName: Joi.string().required(),
//     productPrice: Joi.string().required(),
//   }).unknown(true);
//   const { error } = schema.validate(req.body, { aboutEarly: false });
//   if (error) {
//     res.status(200).json({ error: error });
//   } else {
//     next();
//   }
// };

//create
export const createWishlist = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const wishlist = await Wishlist.create({
      productName: data.name,
      productPrice: data.price,
      // userID: data.userId,
    });
    await wishlist.save();
    res.status(200).json({ message: "wishlist created", data: wishlist });
  } catch (error) {
    res.status(500).json({ message: "wishlist not created", data: error });
  }
};

//delete wishlist

export const deleteWishlist = async (req, res) => {
  try {
    const deleteProduct = await Wishlist.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      res.status(200).send(results[0].id.toString());
    }
    // res.send(deleteProduct);
    res.json({ message: "wishlist item deleted", data: deleteProduct });
  } catch (error) {
    res.Status(400).json({ message: "item not deleted", data: error });
  }
};

// get

export const getWishlist = async (req, res) => {
  const { id: userId } = req.params;
  try {
    const getProduct = await Wishlist.find();
    const WishlistProduct = getProduct.filter(
      (wishlist) => wishlist.userID.toString() === userId
    );
    console.log(WishlistProduct);
    console.log(getProduct);
    if (getProduct) {
      res.json({ message: "wishlist item ", data: getProduct });
    } else {
      res.send({ getProduct: "no result found" });
    }
  } catch (error) {
    console.log(error);
  }
};

// router.patch("/deleteWishlistProduct", async (req, res) => {
//   try {
//     await Wishlist.remove();
//     res.status(200).json("success");
//   } catch (error) {
//     console.log(error);
//   }
// });
