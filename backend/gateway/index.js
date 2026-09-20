import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import proxy from "express-http-proxy";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:process.env.FRONTEND_URl
}))

app.get("/", (req, res) => {
    res.json({ message: "hello from gateway service" })
})
app.use("/auth",proxy(process.env.AUTH_SERVICE));

app.listen(PORT, () => {
    console.log(`Gateway is running on port ${PORT}`);
});
