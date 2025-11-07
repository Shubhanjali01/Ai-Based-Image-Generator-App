import Post from "../models/Posts.js";
import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

//  // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key:  process.env.CLOUDINARY_API_KEY,
        api_secret:  process.env.CLOUDINARY_API_SECRET,
    });


// get all posts 

export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({});
        return res.status(200).json({ success: true, data: posts });
    } catch (error) {
        next( createError(error.status, error?.response?.data?.error?.message|| error?.message )
    );
}
};

// Create a new post
export const createPost = async (req, res, next) => {
   try {
        const {name,prompt,photo} = req.body;
        // const photoUrl = await cloudinary.uploader.upload(photo);
        let imageUrl = "https://res.cloudinary.com/dxlyjqws6/image/upload/v1762505642/Screenshot_2025-06-24_185916_tq709v.png"; // default image
         if (photo && photo.startsWith("data:image")) {
      const uploaded = await cloudinary.uploader.upload(photo);
      imageUrl = uploaded.secure_url;
    }

     const newPost = await Post.create({
      name,
      prompt,
      photo: imageUrl,
    });

    return res.status(201).json({ success: true, data: newPost });

    } catch (error) {
        next( createError(error.status, error?.response?.data?.error?.message|| error?.message )
    );
}
};
