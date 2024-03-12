const { City } = require("../models");

const cityData = [
  {
    city_name: "Toronto",
  },
  {
    city_name: "Mississauga",
  },
  {
    city_name: "Brampton",
  },
  {
    city_name: "Barrie",
  },
  {
    city_name: "Guelph",
  },
  {
    city_name: "Oakville",
  },
  {
    city_name: "Hamilton",
  },
  {
    city_name: "Waterloo",
  },
  {
    city_name: "St. Catharines",
  },
];

const seedCity = async () => City.bulkCreate(cityData);

module.exports = seedCity;
