import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.send("hello from auth agent service")
})

app.listen(PORT, () => {
    console.log(`agent is running on port ${PORT}`);
    connectDB()
});
