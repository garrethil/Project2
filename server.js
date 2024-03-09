// import modules
const path = require("path");
const express = require("express");
const exhbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection.js");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exhbs.create({ helpers });
const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // Number of milliseconds in one day
const maxAgeInDays = 4; // Number of days you want the session to last

const sess = {
  secret: process.env.SESSION_SECRET, // make sure you have this variable in dotenv and set a password
  cookie: {
    maxAge: oneDayInMilliseconds * maxAgeInDays,
    httpOnly: true,
    secure: false, // Change to true if serving over HTTPS
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Go ahead, user. I'm listening"));
});
