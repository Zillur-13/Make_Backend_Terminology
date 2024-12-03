 
 import express from "express";
 const router = express.Router()
 import * as FeaturesController from "../app/controllers/featurescontrollers.js"

 

//  ! Token Endoce and Decode start
router.get("/feature1/TokenEncoded",FeaturesController.TokenEncoded)
router.get("/feature2/TokenDecode",FeaturesController.TokenDecode)
//  ! Token Endoce and Decode end

// ! set cookies
router.get("/feature3/createCookies",FeaturesController.createCookies)


// ? file upload
router.post("/feature4/myFileUpload",FeaturesController.myFileUpload)



export default router;