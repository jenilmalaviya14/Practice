const express = require("express");
const router = express.Router();
const userValidation = require("../../validation/user.validation");
const userController  = require("../../controllers/user.controllers");
const validate = require("../../middlewares/validate");
const addmission = require("../../models/addmission")


/** Get user list */
router.get(
  "/list",
  validate(userValidation),
  userController
);

  module.exports = router;




  // router.get("/list",async(req,res)=>{
  // const data =await addmission.find();
  // res.send(data)
  // })



