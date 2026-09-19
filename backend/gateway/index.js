import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import proxy from "express-http-proxy";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res) => {
    res.json({ message: "hello from gateway service" })
})
app.use("/auth",proxy(process.env.AUTH_SERVICE));

app.listen(PORT, () => {
    console.log(`Gateway is running on port ${PORT}`);
});
