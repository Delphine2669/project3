const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const models = require("../../models");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.hashedPassword, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;

      delete req.body.password;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.viewer.hashedPassword, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.viewer.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "10d",
        });
        delete req.viewer.hashedPassword;
        const message = "Credentials are valid ";
        res.send({ message, token, viewer: req.viewer });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }
    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Authorization  header has not the 'Bearer' type");
    }
    req.token = token;

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.payload = decodedToken;

    next();
  } catch (err) {
    console.error("Error while verifying token:", err);
    res.sendStatus(401);
  }
};

const checkingUser = (req, res, next) => {
  const { username, hashedPassword } = req.body;
  models.viewer
    .findByUsernameWithHashedPassword({ username, hashedPassword })
    .then(([rows]) => {
      const userInDatabase = rows[0];
      if (userInDatabase) {
        res.status(403).json({ error: "Account already exists" });
      } else {
        next();
      }
    });
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
  checkingUser,
};
