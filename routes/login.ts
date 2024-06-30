import express, { NextFunction, Request, Response } from "express";
import validatorLogin from "../validator/login";
import { matchedData } from "express-validator";
import checkLogin, { checkUser } from "../utils/checkLogin";
import { createToken } from "../utils/tokenFuncs";
const router = express.Router();

router.post("/", validatorLogin, async (req: Request, res: Response, next: NextFunction) => {
    const data = matchedData(req);
    const { user, password } = data;

    // success
    if (await checkLogin(user, password)) {
        const token = createToken({user}, "1h");

        res.json({
            user,
            token,
        });
    }
    // Fail
    else {
        // Check if user exists
        if (checkUser(user)) {
            res.status(401); // Unauthorized
            res.send("Password incorrect");
        }
        // User does not exists
        else {
            res.status(404); // User not found
            res.send("User not found");
        }
    }
});

export default router;
