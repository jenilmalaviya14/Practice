const express = require("express");
const router = express.Router();
const categoryValidation = require("../../validation/category.validation");
const categoryController = require("../../controllers/category.controllers");
const validate = require("../../middlewares/validate");


/** Get user list */
router.post(
    "/create-category",
    validate(categoryValidation),
    categoryController
  );

  module.exports = router;