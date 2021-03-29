const express = require("express");
const LoginRouter = express.Router();
const LoginController = require("../../../controllers/app/loginController");
const LoginValidator = require("../../../validations/loginValidate");

LoginRouter.post(
  "/signup",
  LoginValidator.ValidateSignUp,
  LoginController.SignUp
);

module.exports = LoginRouter;
