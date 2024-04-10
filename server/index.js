// importing from packages
import express from "express"
import mongoose from "mongoose";
import authRouter from "../server/routes/auth.js"

// Initialization
const PORT = 3000
const app = express();
const DB = "mongodb+srv://tanmay:tanmay123@cluster0.egq4gp0.mongodb.net/?retryWrites=true&w=majority";

// middle ware
app.use(express.json())
app.use(authRouter);

// connections
mongoose
    .connect(DB)
    .then(() => {
        console.log("connection successful");
    }).catch((e) => {
        console.log(e);
    });

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT} hello`);
});
