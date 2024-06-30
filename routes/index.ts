import express from "express";
import fs from "fs";
const router = express.Router();

fs.readdirSync(__dirname).filter(async (file) => {
    const removeExtension = (fileName) => {
        return fileName.split(".").shift();
    };
    const name = removeExtension(file);
    if (name !== "index") {
        const module = await import("./" + name);
        router.use("/" + name, module.default);
    }
});

export default router;
