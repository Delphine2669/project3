const models = require("../models");

const filterByCategory = (req, res) => {
  models.videoCat
    .findByCategory(req.params.id)
    .then(([videos]) => {
      res.send(videos);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  filterByCategory,
};
