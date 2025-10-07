const userModel = require("../models/user.model");

async function registerUser(req, res) {
  const { fullname, email, password } = req.body;
  const isUserAlreadyExists = await userModel.findOne({
    email
  })

  if(isUserAlreadyExists){
    return res.status(400).json({
        message:"User already exists"
    })
  }
}
