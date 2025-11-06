import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

// 
// // Configuration
// cloudinary.config({
//     cloud_name: 'dxlyjqws6',
//     api_key: '199214651339655',
//     api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
// });

// get all posts 

export const getAllPosts = async(requestAnimationFrame,req,res,next) => {
    try{
        const posts = await Post.find({});
        return res.status(200).json({success:true, data:posts});
    }catch(error){
        next({createError(error.status,error?.response?.data?.error?.message||error?.message)});
    }
}