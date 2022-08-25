import mongoose from "mongoose"

const saveProductSchema = new mongoose.Schema({
    id:{type:String},
    name:{type:String},
    desc:{type:String},
  //   small:{}
  //   large:{},     
    price :{type:String}    
  })
  
  const saveProduct = mongoose.model("product",saveProductSchema)
export default saveProduct;