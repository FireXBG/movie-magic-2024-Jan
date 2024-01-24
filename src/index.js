const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const routes = require("./routes");
const configHandlebars = require("./config/configHandlebars");
const configExpress = require("./config/configExpress");

const app = express();
const port = 3000;

configHandlebars(app);
configExpress(app);

app.use(routes);

app.listen(3000, () => {
  console.log(`Server is on post ${port}`);
});
