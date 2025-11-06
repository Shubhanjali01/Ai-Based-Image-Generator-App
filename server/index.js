import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended:true}));


// error handler 
app.use((err,req,res,next) =>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong!"
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

// Default get 
app.get("/",async (req,res)=>{
    res.status(200).json({
        message: "Hello Shubhanjali learning Backend ?",

    });
});
// function to connect to mongodb with our server

const connectDB = ()=>{
    mongoose.set("strictQuery",true);
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>console.log("MongoDB Connected"))
    .catch((err)=>{
        console.error("Failed to Connect to DB");
        console.log(err);
    })
}
// function to start the server 
const startServer = async ()=>{
    try{
        connectDB();
        app.listen(8080, ()=> console.log("Server started on port 8080"))
    }catch(error){
        console.log(error);
    }
};

startServer();