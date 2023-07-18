const express = require("express");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const videoCatControllers = require("./controllers/videoCatControllers");
const viewerControllers = require("./controllers/viewerControllers");

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.read);
router.get("/videos/category", videoCatControllers.getCategories);
router.get("/videos/category/:category", videoCatControllers.filterByCategory);
router.put("/videos/:id", videoControllers.edit);
router.post("/videos", videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);
router.get("/viewer", viewerControllers.browse);
router.get("/viewer/:id", viewerControllers.read);
router.put("/viewer/:id", viewerControllers.edit);
router.post("/viewer", viewerControllers.add);
router.delete("/viewer/:id", viewerControllers.destroy);

/* router.post(
  "/login",
  viewerControllers.getUserByEmailWithPasswordAndPassToNext
); */

module.exports = router;
