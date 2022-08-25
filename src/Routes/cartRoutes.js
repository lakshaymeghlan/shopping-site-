import express from "express";
import Cart from "../Schema/CartDetails";
import _ from "lodash";

const router = express.Router()

router.post("/cart", async(req,res)=>{
    try {
        const data = req.body
        console.log(data);
        const cart = new Cart(data)
        await cart.save();
        res.status(200).send(cart);
    } catch (error) {
        res.status(500).send(error);
    }

});

//delete cart

router.delete("/cart/:id",async(req,res)=>{
    try {
      const deleteProduct = await Cart.findByIdAndDelete(req.params.id);
      if(!req.params.id){
        res.status(200).send((results[0].id).toString());
      }
      res.send(deleteProduct);
    } catch (error) {
        res.sendStatus(400);
    }                                                                                                      
})

//get

router.get("/cartProduct/:id",async(req,res)=>{
    const {id:userId} = req.params;
    try {
        const getProduct = await Cart.find();
    const CartProduct = getProduct.filter(
      (cart) => cart.userID.toString() === userId
    );
    console.log(CartProduct);
    console.log(getProduct);
        if(getProduct){
            res.send(getProduct)
        }else{
            res.send({getProduct:"no result found"})
        }
    } catch (error) {
        console.log(error);
    }
   
})


//update

// export const updateQuantity = async (req, res) => {
//     const { id: _id } = req.params;
//     const quantity = req.body;
//     const number = parseInt(quantity.quantity);
  
//     if (!mongoose.Types.ObjectId.isValid(_id)) {
//       return res.status(404).send("product unavailable...");
//     }
  
//     try {
//       await Cart.findByIdAndUpdate(_id, { $set: { quantity: number } });
//       res.status(200).json({ message: "Successfully updated" });
//     } catch (error) {
//       console.log(error);
//     }
//   };



export default router;