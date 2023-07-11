const express = require("express");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const viewerControllers = require("./controllers/viewerControllers");

const { hashPassword, verifyPassword } = require("./middlewares/services/auth");

router.get("/videos/:id", videoControllers.read);
router.put("/videos/:id", videoControllers.edit);
router.post("/videos", videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);

router.get("/viewer", viewerControllers.browse);
router.get("/viewer/:id", viewerControllers.read);
router.delete("/viewer/:id", viewerControllers.destroy);
router.post("/viewer", hashPassword, viewerControllers.add);
router.put("/viewer/:id", hashPassword, viewerControllers.edit);

const authControllers = require("./controllers/authControllers");

router.post(
  "/login",
  authControllers.getUserByUsernameWithPasswordAndPassToNext,
  verifyPassword
);
module.exports = router;
