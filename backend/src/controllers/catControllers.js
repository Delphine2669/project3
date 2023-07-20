const models = require("../models");

const getCategories = (req, res) => {
  models.category
    .getAllCategories()
    .then(([categories]) => {
      res.send(categories);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getCategories,
};
