const express = require("express");
const Router = express.Router();

// config admin routes
const AdminRouter = require("./admin");
Router.use("/admin", AdminRouter);
const AppRouter = require("./app");
Router.use("/app", AppRouter);

module.exports = Router;
