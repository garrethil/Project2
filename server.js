// import modules
const path = require("path");
const express = require("express");
const exhbs = require("exoress-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection.js");

const app = express();
const PORT = processs.env.PORT || 3001;

const hbs = exhbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port", PORT));
});
