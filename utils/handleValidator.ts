import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

const validateResults = (req:Request, res:Response, next:NextFunction) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        // console.log(req)
        res.status(400);
        res.send(err);
    }
}

export default validateResults;