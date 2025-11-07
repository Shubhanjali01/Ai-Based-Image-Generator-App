import * as dotenv from "dotenv";
import { createError } from "../error.js";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Controller to generate Image
export const generateImage = async (req, res, next) => {
    try {
        //         const { prompt } = req.body;
        //         const response = await openai.createImage({
        //             prompt,
        //             n: 1,
        //             size: "1024x1024",
        //             response_format: "b64_json",
        //         });
        // 
        // 
        //         const generatedImage = response.data.data[0].b64_json;
        // 
        //         return res.status(200).json({ photo: generatedImage })

        const { prompt } = req.body;

        if (!prompt) return next(createError(400, "Prompt is required"));

        const aiResponse = await openai.images.generate({
            model: "gpt-image-1",
            prompt,
            size: "1024x1024",
        });

        const image = aiResponse.data[0].url || aiResponse.data[0].b64_json;

        res.status(200).json({ success: true, image });

    } catch (error) {
        next(createError(error.status, error?.response?.data?.error?.message || error?.message)
        );
    }
};