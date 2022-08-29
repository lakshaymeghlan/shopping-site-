import express from "express";
import products from "../Schema/ProductDetail";
import _ from "lodash";
const router = express.Router();

export const products_details = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const product = new product(data);
    await product.save();
    res.status(200).json({ message: "product Saved", data: data });
  } catch (error) {
    res.status(500).json({ message: "product not Saved", data: error });
  }
};

//add
export const add_product = async (req, res) => {
  try {
    let product = new products(req.body);
    console.log(product);
    let result = await product.save();
    res.status(200).json({ message: "product added ", data: result });
  } catch (error) {
    res.status(500).json({ message: "product not added ", data: error });
  }
};

//get

export const get_product = async (req, res) => {
  const getProduct = await products.find();
  res.status(200).json({ message: "product", data: getProduct });
  // if (getProduct){
  //     res.send(getProduct)
  // }else{
  //     res.send({getProduct:"no result found"})
  // }
};

// delete
export const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await products.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      res.status(200).send(results[0].id.toString());
    }
    res.json({ message: "product deleted", data: deleteProduct });
  } catch (error) {
    res.Status(400).json({ message: "product not deleted", data: error });
  }
};

//update

export const updateProduct = async (req, res) => {
  const newdata = req.body;
  try {
    const updateProduct = await products.findByIdAndUpdate(
      req.params.id,
      { $set: newdata },
      { new: true }
    );
    if (!updateProduct)
      return res.status(404).send("product you are looking for is not found");
    res.send(updateProduct);
  } catch (error) {
    console.log(error);
  }
};

export default router;
