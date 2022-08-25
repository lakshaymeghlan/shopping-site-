import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    productName: {type:String},
    productPrice:{type:String}
    

})

const Cart = mongoose.model("cartDetail",cartSchema)
export default Cart;
