import express from "express"
import User from "../models/user.js";
import bcryptjs from "bcryptjs"
const authRouter = express.Router();
import jwt from "jsonwebtoken";

authRouter.post("/api/signup", async (_req, res) => {
    try {
        const { name, email, password } = _req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User with same email already exists!" });
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        let user = new User({
            name: name,
            email: email,
            password: hashedPassword
        })
        user = await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

authRouter.post("/api/signin", async (_req, res) => {
    try {
        const { email, password } = _req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "The user with this email does not exist" });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Incorrect Password" });
        }
        const token = jwt.sign({ id: user._id }, "passwordKey");
        res.json({ token, ...user._doc });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

authRouter.get("/api/users", async (_req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

export default authRouter