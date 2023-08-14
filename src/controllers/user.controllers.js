const createUser = async (req, res) => {
    try {
      const reqBody = req.body;

      res.status(200).json({
        success: true,
        message: "User create successfully!",
        data: { user },
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };