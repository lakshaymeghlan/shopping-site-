import express from "express";
import Wishlist from "../Schema/Wishlist";
import _ from "lodash";

const router = express.Router();

router.post("/wishlist", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const wishlist = await Wishlist.create({
      productName: data.name,
      productPrice: data.price,
      userID: data.userId,
    });
    await wishlist.save();
    res.status(200).send(wishlist);
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete wishlist

router.delete("/wishlist/:id", async (req, res) => {
  try {
    const deleteProduct = await Wishlist.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      res.status(200).send(results[0].id.toString());
    }
    res.send(deleteProduct);
  } catch (error) {
    res.sendStatus(400);
  }
});

// get

router.patch("/deleteWishlistProduct", async(req,res)=>{
    try {
        await Wishlist.remove()
        res.status(200).json("success")
    } catch (error) {
        console.log(error);
    }
})



router.get("/wishlistProduct/:id", async (req, res) => {
    const {id : userId} = req.params;
  try {
    const getProduct = await Wishlist.find();
    const WishlistProduct = getProduct.filter(
      (wishlist) => wishlist.userID.toString() === userId
    );
    console.log(WishlistProduct);
    console.log(getProduct);
    if (getProduct) {
      res.send(getProduct);
    } else {
      res.send({ getProduct: "no result found" });
    }
  } catch (error) {
    console.log(error);
  }
});

export default router;
