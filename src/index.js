const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const app = express();
const port = 3000;

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home", { layout: false });
});

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log(`Server is on post ${port}`);
});
