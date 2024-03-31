import jwt from "jsonwebtoken";

const auth = async (_req, res, next) => {
    try {
        const token = _req.header("x-auth-token");
        if (!token) return res.status(401).json({msg: "no auth token, request denied"});
        const verified = jwt.verify(token, "passwordKey");
        if(!verified) return res.status(401).json({msg: "Token verification failed, authorization denied"});
        _req.user = verified.id;
        _req.token = token;
        next();
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export default auth;