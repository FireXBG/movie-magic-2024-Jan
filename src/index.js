const express = require("express");
const mongoose = require("mongoose");

const configHandlebars = require("./config/configHandlebars");
const configExpress = require("./config/configExpress");
const routes = require("./routes");

const app = express();
const port = 3000;

configHandlebars(app);
configExpress(app);

app.use(routes);

mongoose
  .connect("mongodb://localhost:27017/magic-movies")
  .then(() => {
    console.log("DB connected successfully!");
    app.listen(3000, () => {
      console.log(`Server is on post ${port}`);
    });
  })
  .catch((err) => {
    console.log("DB connection failed!");
    console.log("---------------------");
    console.log(err);
  });
