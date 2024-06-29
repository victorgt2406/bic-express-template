import express from "express";
import fs from "fs";
const router = express.Router();

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

// read all the files in this subdirectory except the index (this file)
fs.readdirSync(__dirname).filter((file) => {
    const name = removeExtension(file); // index, users, storage, tracks
    if(name !== 'index') {
        // add to the router a route with its subroutes configured
        router.use('/' + name, require('./'+name)); // http://localhost:3000/api/tracks
    }
})

export default router