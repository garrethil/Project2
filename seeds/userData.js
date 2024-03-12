const { User } = require("../models");
const bcrypt = require("bcrypt");

const userData = [
  {
    user_name: "john_doe",
    email: "john_doe@example.com",
    password: bcrypt.hashSync("p@ssword!23", 10),
  },
  {
    user_name: "jane_day",
    email: "janeDay@example.com",
    password: bcrypt.hashSync("@pple!23", 10),
  },
  {
    user_name: "mike_smith",
    email: "mikeSmith@example.com",
    password: bcrypt.hashSync("projecT432", 10),
  },
  {
    user_name: "sara_bill",
    email: "saraBill@example.com",
    password: bcrypt.hashSync("mond@y!32", 10),
  },
];

const seedUser = async () => User.bulkCreate(userData);

module.exports = seedUser;
