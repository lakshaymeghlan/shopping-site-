import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  productId: { type: String,required:true },
  productName: { type: String,required:true  },
  productPrice: { type: String ,required:true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
});

const Wishlist = mongoose.model("wishlistDetail", wishlistSchema);
export default Wishlist;
