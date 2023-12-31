const express = require("express");
const {
  loginController,
  registerController,
  authController,
  registereduserController,
} = require("../controllers/userCtrl");
const authMiddlewares = require("../middlewares/authMiddlewares");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

//REGISTEREDUSER || POST
router.post("/registereduser",registereduserController);

//AUTH || POST
router.post('./getUserData', authMiddlewares ,authController)
module.exports = router;
