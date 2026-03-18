
import "dotenv/config"; 

import express from "express";
import apiRoutes from "./routes/api.js";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiRoutes);

app.set("view engine", "ejs");



app.get("/", (req, res) => {
  res.send("Server working");
});

app.listen(port, () => {
  console.log("Server running at 3000");
});