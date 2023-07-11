const models = require("../models");

const getUserByUsernameWithPasswordAndPassToNext = (req, res, next) => {
  models.viewer
    .findByUsernameWithHashedPassword(req.body.username)
    .then(([rows]) => {
      const userInDatabase = rows[0];

      if (userInDatabase == null) {
        res.sendStatus(422);
      } else {
        req.viewer = userInDatabase;

        next();
      }
    });
};
module.exports = {
  getUserByUsernameWithPasswordAndPassToNext,
};
