import express  from "express"
import { addFood,foodList, removeFood } from "../controllers/food.controller.js"
import multer from "multer"

const foodRouter = express.Router();
const storage = multer.diskStorage({
    destination:"uploads",
    filename :(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload  = multer({storage : storage})
foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",foodList);
foodRouter.post("/remove",removeFood);




export default foodRouter;