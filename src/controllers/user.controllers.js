const userServices = require("../services/user.service");
const User = require('../models/user')

const getUser = async (req, res) => {
    try {
     const user = await User.find()
      res.status(200).json({
        success: true,
        message: "User create successfully!",
        data: { user : user},
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  module.exports = getUser;