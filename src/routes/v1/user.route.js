const express = require("express");

const router = express.Router();
const addmission = require("../../models/addmission");
const user = require("../../models/user");
const student = require("../../models/student");
const category = require("../../models/category");

router.get("/list",async(req,res)=>{
  const data =await category .find();
  res.send(data)
})
// router.get("/list",async(req,res)=>{
//   const data =await addmission.find();
//   res.send(data)
// })

// router.put("/update-details/:userId",async(req,res)=>{
//     const data = await user.find();
//   res.send(data)
// })
// router.post("/create-user",async(req,res)=>{
//     const data = await student.find();
//   res.send(data)
// })


module.exports = router;

