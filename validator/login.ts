import { check } from "express-validator";
import handleValidator from "../utils/handleValidator";
import { NextFunction, Request, Response } from "express";

const validatorLogin = [
    check("user").exists().notEmpty(),
    check("password").exists().notEmpty().isLength({ min: 8, max: 64 }),
    (req: Request, res: Response, next: NextFunction) => {
        return handleValidator(req, res, next);
    },
];

export default validatorLogin;
