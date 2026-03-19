import express from "express";
import db from "../db.js";

const router = express.Router();
let today = new String(new Date(Date.now())).slice(4, 15); // "Sep 11 2023";


router.get("/", (req, res) => {
  res.send("API working");
});

router.get("/posts", (req, res) => {
  res.send("Posts API");
});

router.post("/post",(req,res)=>{
 let content = "Nothing"
let title = "Rushikesh"
 res.render("index",{content,title})
});


router.get("/newNote",(req,res)=>{

  res.render("newNote")
})

export default router;