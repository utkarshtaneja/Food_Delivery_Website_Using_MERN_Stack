import foodModel from "../models/food.models.js";
import fs  from  "fs";

let image_filename = `${req.file.filename}`;
const addFood = async(req,res)=>{
    let food = new foodModel({
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category : req.body.category,
        image :image_filename
    })
    try{
        await  food.save();
        res.status(201).json({ success:true ,
            message :"data saved "}) 
    }catch(error){
        console.log(error);
        
        res.status(500).json({success :false ,
            message :"data not saved"});
    }
}
export const foodList = async(req,res)=>{
    try{
        const food = foodModel.find({})
        res.status(200).json({success : true ,
            food:food,
            message : "all data sent"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message : err
        })
    }
}
export const removeFood = async(req,res)=>{
    try {
        const id  = req.body.id;
        const food = await foodModel.findById({id:id})
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete({id:id})
        res.status(201).json({
            success:true,
            message : "Food deleted successfully"
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false ,
            message:error
        })
        
        
    }

}
export {
    addFood, 
}