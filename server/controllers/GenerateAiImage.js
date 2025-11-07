import * as dotenv from "dotenv";
import { createError } from "../error.js";
import OpenAI from "openai";
// import { Configuration, OpenAIApi } from 'openai';

import { response } from "express";


dotenv.config();


// Setup openAI api keY
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

const openai = new OpenAI({
     apiKey: process.env.OPENAI_API_KEY,
});

// Controller to generate Image

export const generateImage = async(req,res,next)=>{
    try{
        const {prompt} = req.body;
        const response = await openai.createImage({

            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json",
        });

        
        const generateImage = response.data.data[0].b64_json;

        return res.status(200).json({photo: generateImage })

    }catch(error){
          next( createError(error.status, error?.response?.data?.error?.message|| error?.messag )
    );
    }
};