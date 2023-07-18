const models = require("../models");

const getCategories = (req, res) => {
  models.video_has_categorie
    .getAllCategories()
    .then((categories) => {
      res.send(categories);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const filterByCategory = (req, res) => {
  const { category } = req.params;

  models.video_has_categorie
    .findByCategory(category)
    .then((videos) => {
      res.send(videos);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getCategories,
  filterByCategory,
};
