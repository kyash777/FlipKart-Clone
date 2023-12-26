import express from "express";

import { userSignup,userLogin } from "../controllers/user-controller.js";
import { getProducts ,getProductById} from "../controllers/product-controller.js";

const router=express.Router();

//////post requests/////
router.post("/signup",userSignup);
router.post("/login",userLogin);

//////get requests/////

router.get("/products",getProducts);
router.get("/product/:id",getProductById)



export default router;