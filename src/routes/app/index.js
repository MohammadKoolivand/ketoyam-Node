const express = require('express')
const AppRouter = express.Router()

// config login routes
const LoginRouter = require("./login");
AppRouter.use("/login", LoginRouter);


module.exports = AppRouter