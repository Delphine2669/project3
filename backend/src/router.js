const express = require("express");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const viewerControllers = require("./controllers/viewerControllers");

const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/services/auth");

router.get("/videos/:id", videoControllers.read);
router.get("/viewer", viewerControllers.browse);
router.get("/viewer/:id", viewerControllers.read);
router.post("/viewer", hashPassword, viewerControllers.add);

const authControllers = require("./controllers/authControllers");

router.post(
  "/login",
  authControllers.getUserByUsernameWithPasswordAndPassToNext,
  verifyPassword
);
router.use(verifyToken);
router.delete("/viewer/:id", viewerControllers.destroy);
router.put("/viewer/:id", hashPassword, viewerControllers.edit);
router.put("/videos/:id", videoControllers.edit);
router.post("/videos", videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);

module.exports = router;
