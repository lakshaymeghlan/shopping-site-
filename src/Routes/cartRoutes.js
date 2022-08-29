import express from "express";
import { addToCart,deleteCart,cartProduct } from "../Controllers/cartController";
import _ from "lodash";

const router = express.Router()

router.post("/add",addToCart);
router.delete("/delete/:id",deleteCart);
router.get("/cartProduct/:id",cartProduct);


export default router;