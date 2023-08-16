const categoryService = require("../services");
const Category = require('../models/category')


const creatCategory = async (req, res) => {
  try {
    //  const category = await Category.find()
    const reqBody = req.body
    res.status(200).json({
      success: true,
      message: ("Category Successfully Create"),
      data: { reqBody }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { creatCategory };

