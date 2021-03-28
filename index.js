// import modules
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// config express server
const app = express();
const server = http.createServer(app);

// config .env file
dotenv.config();

// config body of request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database
mongoose.connect(proccess.env.DATABASE_URL + proccess.env.DATABASE_NAME, {useNewUrlParser:true, useUnifiedTopology:true});

// start server
server.listen(proccess.env.PORT, proccess.env.HOST, () => {
  console.log("server running on port" + process.env.PORT);
});
