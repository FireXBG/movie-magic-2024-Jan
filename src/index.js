const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const routes = require("./routes");

const app = express();
const port = 3000;

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(3000, () => {
  console.log(`Server is on post ${port}`);
});
