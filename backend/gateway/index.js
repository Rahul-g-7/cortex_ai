import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({ message: "hello from gateway service" })
})

app.listen(PORT, () => {
    console.log(`Gateway is running on port ${PORT}`);
});
