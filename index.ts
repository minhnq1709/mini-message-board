import express from "express";
import { configDotenv } from "dotenv";
import path from "node:path";

configDotenv();

// `import.meta` is an object created by JavaScript compiler for every module
const __dirname = import.meta.dirname;
const assetPath = path.join(__dirname, "public");

const app = express();
app.use(express.static(assetPath));

const PORT: number = (process.env.PORT as unknown as number) ?? 3000;

// enable EJS as view engine / template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// const viewsDir = app.get("views");
// console.log(`viewsDir=${viewsDir}`);

const messages = [
  {
    user: "Amanda",
    text: "hello",
    added: new Date(),
  },
  {
    user: "Bobbie",
    text: "did u clean ur room?",
    added: new Date(),
  },
  {
    user: "Annie",
    text: "wesrolkjfghoiews",
    added: new Date(),
  },
  {
    user: "Minh",
    text: "testing",
    added: new Date(),
  },
  {
    user: "Charlie",
    text: "(it is really empty)",
    added: new Date(),
  },
  {
    user: "Dennis",
    text: "who like sharks?",
    added: new Date(),
  },
];

const users = ["Sarah", "Bob", "Annie", "Charlie", "Dennis"];

app.get("/", (req, res, next) => {
  res.render("index", {
    messages: messages,
  });
});

app.get("/about", (req, res, next) => {
  res.render("404");
});

app.post("/new", (req, res, next) => {});

// 404
app.get("/{*splat}", (req, res, next) => {
  res.render("404", { message: `${req.path} not found!` });
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on port ${PORT}`);
});
