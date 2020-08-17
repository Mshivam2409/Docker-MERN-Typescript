import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const PORT = process.env.PORT || 8000

const app = express();

if (process.env.NODE_ENV === "production") {
    const publicPath = process.env.BUILD_DIRECTORY as string
    app.use(express.static(publicPath));
    app.get("/", (req, res) => {
        res.sendFile(path.resolve(publicPath + "/index.html"));
    });
}


app.listen(PORT, () => {
    console.log(`Server Listening on Port ${PORT}`);
})

