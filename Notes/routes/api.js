import express from "express";
import db from "../db.js";
import { Result } from "postcss";

const router = express.Router();
let today = new String(new Date(Date.now())).slice(4, 15); // "Sep 11 2023";


router.get("/", (req, res) => {
  res.send("API working");
});

router.get("/posts", (req, res) => {
  res.send("Posts API");
});


router.get("/post/:Id",async(req,res)=>{
  let Id = req.params.Id;  



  try {
    const result = await db.query("SELECT * FROM notes WHERE id=$1",[Id]);
  res.render("note",{note :result.row[0]})

  } catch (error) {
    console.error(error);
  }
})

router.post("/post",(req,res)=>{
 let content = req.body.content;
let title = req.body.title;
db.query("INSERT INTO notes VALUES()")
 res.render("index",{content,title})
});


router.get("/newNote",(req,res)=>{

  res.render("newNote")
})

export default router;