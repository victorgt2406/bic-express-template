// console.log("Hello world")
import express from "express";
import routes from "./routes";
import path from "path";
import { configDotenv } from "dotenv";

configDotenv();
const port = process.env.port || 3000;
const app = express();

// API routes
app.use("/api", routes);

// Website routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});

app.listen(port, () => {
    console.log("Server started!!! 🚀\n"+
        "http://localhost:"+port
    );
});
