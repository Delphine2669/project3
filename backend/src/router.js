const express = require("express");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const catControllers = require("./controllers/catControllers");
const videoCatControllers = require("./controllers/videoCatControllers");
const viewerControllers = require("./controllers/viewerControllers");

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.read);
router.get("/categories", catControllers.getCategories);
router.get("/categories/:id", videoCatControllers.filterByCategory);
router.put("/videos/:id", videoControllers.edit);
router.post("/videos", videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);
router.get("/viewers", viewerControllers.browse);
router.get("/viewers/:id", viewerControllers.read);
router.put("/viewers/:id", viewerControllers.edit);
router.post("/viewers", viewerControllers.add);
router.delete("/viewers/:id", viewerControllers.destroy);

/* router.post(
  "/login",
  viewerControllers.getUserByEmailWithPasswordAndPassToNext
); */

module.exports = router;
