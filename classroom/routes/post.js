const express = require("express");
const router = express.Router();
const Listing = require("../models/listing"); // adjust path if needed

//Index 
router.get("/new", (req,res) =>{
    res.send("GET for post");
});

// Form to create new listing + show all listings


//show 
router.get("/:id", (req,res) =>{
    res.send("GET for post id");
});

//POST 
router.post("/", (req,res) =>{
    res.send("post for posts");
});

//DELETE 
router.delete("/:id", (req,res) =>{
    res.send("delete for post id");
});

module.exports=router;