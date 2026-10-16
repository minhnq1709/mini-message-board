import express from "express";
import { configDotenv } from "dotenv";
import path from "node:path";
configDotenv();
// `import.meta` is an object created by JavaScript compiler for every module
const __dirname = import.meta.dirname;
const app = express();
const PORT = process.env.PORT ?? 3000;
// enable EJS as view engine / template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// const viewsDir = app.get("views");
// console.log(`viewsDir=${viewsDir}`);
app.get("/", (req, res, next) => {
    res.render("index", { message: "custom message" });
});
app.listen(PORT, (err) => {
    if (err)
        throw err;
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map