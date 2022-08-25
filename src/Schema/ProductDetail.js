import mongoose  from "mongoose";

const productsSchema = new mongoose.Schema({
    productName: {
        type:String,
        // required:True,

    },
    productPrice:{
            type:Number,
            // required:True,
    },
    productCategory:{
        type:Number,
        // required:True,
}

})



export default mongoose.model("products",productsSchema)
 



