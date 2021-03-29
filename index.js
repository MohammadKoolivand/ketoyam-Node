// import modules
const express = require("express");
const http = require('http');
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
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
});

// config routes
const Routes = require('./src/routes')
app.use(Routes)

// start server
server.listen(process.env.PORT, process.env.HOST, () => {
  console.log("server running on port" + process.env.PORT);
});
