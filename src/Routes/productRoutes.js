import express from "express";
import products from "../Schema/ProductDetail";
import _ from "lodash";
import saveProduct from "../Schema/saveProduct";

const router = express.Router();

router.post("/products_details", async(req,res)=>{
    try {
        const data = req.body
        console.log(data);
        const product = new product(data)
        await product.save();
        res.status(200).send(product);
    } catch (error) {
        res.status(500).send(error);
    }

});

//add
router.post("/add-product", async(req,res)=>{
    let product = new saveProduct(req.body);
    let result = await product.save();
    res.send(result);
})

//get

router.get("/product",async(req,res)=>{
    const getProduct = await products.find();
    res.status(200).json(getProduct);
    // if (getProduct){
    //     res.send(getProduct)
    // }else{
    //     res.send({getProduct:"no result found"})
    // }
})


// delete
router.delete("/product/:id",async(req,res)=>{
    try {
      const deleteProduct = await products.findByIdAndDelete(req.params.id);
      if(!req.params.id){
        res.status(200).send((results[0].id).toString());
      }
      res.send(deleteProduct);
    } catch (error) {
        res.sendStatus(400);
    }
})

export default router;