import express, { Router } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import router from "./routes/agent.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser())
app.use("/",router)
app.get("/",(req,res)=>{
    res.send("hello from agent service")
})

app.listen(PORT, () => {
    console.log(`agent is running on port ${PORT}`);
    connectDB()
});
