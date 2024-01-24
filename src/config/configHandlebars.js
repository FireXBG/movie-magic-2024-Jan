const handlebars = require("express-handlebars");
const path = require("path");

function configHandlebars(app) {
  app.engine(
    "hbs",
    handlebars.engine({
      extname: "hbs",
    })
  );
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "hbs");

  return app;
}

module.exports = configHandlebars;
