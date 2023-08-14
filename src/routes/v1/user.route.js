const express = require("express");

const router = express.Router();
const userValidation = require("../../validation/user.validation");
const userController = require("../../controllers/user.controllers");
const addmission = require("../../models/addmission");


router.get(
  "/list",
  validate(userValidation.getUserList),
  userController.getUserList
  );
// router.get("/list",async(req,res)=>{
// const data =await addmission.find();
// res.send(data)
// })

module.exports = router;

// const user = require("../../models/user");
// const student = require("../../models/student");
// const category = require("../../models/category");

// router.get("/list",async(req,res)=>{
// const data =await category .find();
// res.send(data)
// })

  // router.put("/update-details/:userId",async(req,res)=>{
  //     const data = await user.find();
  //   res.send(data)
  // })
  // router.post("/create-user",async(req,res)=>{
  //     const data = await student.find();
  //   res.send(data)
  // })
