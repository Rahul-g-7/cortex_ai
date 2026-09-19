import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({ message: "hello from auth service" })
})

app.listen(PORT, () => {
    console.log(`auth is running on port ${PORT}`);
    connectDB()
});
