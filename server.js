// import modules
const path = require("path");
const express = require("express");
const exhbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection.js");

const app = express();
const PORT = processs.env.PORT || 3001;

const hbs = exhbs.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Go ahead, user. I'm listening"));
});
