const userServices = require("../services/category.service");
const Category = require('../models/category')

const getCategory = async (req, res) => {
    try {
     const user = await Category.find()
      res.status(200).json({
        success: true,
        message: "User create successfully!",
        data: { user : user},
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  module.exports = getCategory;