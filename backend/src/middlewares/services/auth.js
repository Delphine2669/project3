const argon2 = require("argon2");
require("dotenv").config();

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const hashedPassword = await argon2.hash(req.body.password, hashingOptions);
    req.body.hashedPassword = hashedPassword;

    delete req.body.password;
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  hashPassword,
};
