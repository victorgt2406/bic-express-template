import express, { NextFunction, Request, Response } from "express";
import validatorLogin from "../validator/login";
import { matchedData } from "express-validator";
import checkLogin, { checkUser } from "../utils/checkLogin";
import { createToken } from "../utils/tokenFuncs";
const router = express.Router();
const TOKEN_TIME = 1; // hours
const KEEP_TOKEN_TIME = 14; // days

router.post("/", validatorLogin, async (req: Request, res: Response, next: NextFunction) => {
    const data = matchedData(req);
    const { user, password, keep } = data;

    // success
    if (await checkLogin(user, password)) {
        const token = createToken({ user }, TOKEN_TIME + "h");
        const keepToken = keep ? createToken({ user }, KEEP_TOKEN_TIME + "d") : undefined;

        const tokenDatetime = new Date();
        tokenDatetime.setHours(tokenDatetime.getHours() + TOKEN_TIME);
        const tokenEnd = tokenDatetime.toISOString();

        const keepTokenDatetime = new Date();
        keepTokenDatetime.setDate(keepTokenDatetime.getDate() + KEEP_TOKEN_TIME);
        const keepTokenEnd = keepTokenDatetime.toISOString();

        res.json({
            user,
            token,
            tokenEnd,
            keepToken,
            keepTokenEnd,
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
