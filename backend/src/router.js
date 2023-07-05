const express = require("express");

const router = express.Router();

const videoControllers = require("./controllers/videoControllers");
const viewerControllers = require("./controllers/viewerControllers");

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.read);
router.put("/videos/:id", videoControllers.edit);
router.post("/videos", videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);
router.get("/viewer", viewerControllers.browse);
router.get("/videos/:id", viewerControllers.read);
router.put("/videos/:id", viewerControllers.edit);
router.post("/videos", viewerControllers.add);
router.delete("/videos/:id", viewerControllers.destroy);

router.post("/videos/login");
module.exports = router;
