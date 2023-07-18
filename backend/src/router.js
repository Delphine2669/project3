const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const upload = multer({ dest: "./public/uploads" });
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middlewares/services/auth");
const videoControllers = require("./controllers/videoControllers");
const photoControllers = require("./controllers/photoControllers");
const viewerControllers = require("./controllers/viewerControllers");

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.read);
router.put("/videos/:id", videoControllers.edit);
router.post("/videos", videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);

router.get("/viewer", viewerControllers.browse);
router.get("/viewer/:id", viewerControllers.read);

router.post(
  "/videos",
  upload.single("videoData"),
  (req, res, next) => {
    const { originalname, filename } = req.file;
    const ourPath = `./public/uploads/${uuidv4()}-${originalname}`;
    fs.rename(`./public/uploads/${filename}`, ourPath, (err) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      req.videoData = {
        title: req.body.title,
        time: req.body.time,
        description: req.body.description,
        publicationDate: req.body.publicationDate,
        isAccessible: req.body.isAccessible,
        videoData: ourPath,
      };
      return null;
    });
    next();
  },
  videoControllers.add
);
router.post("/videos", upload.single("videoData"), videoControllers.add);
router.post("/viewer", hashPassword, viewerControllers.add);

const authControllers = require("./controllers/authControllers");

router.post(
  "/login",
  authControllers.getUserByUsernameWithPasswordAndPassToNext,
  verifyPassword
);
router.use(verifyToken);
router.delete("/viewer/:id", viewerControllers.destroy);

router.get("/photos", photoControllers.browse);
router.get("/photos/:id", photoControllers.read);
router.put("/photos/:id", photoControllers.edit);
router.post("/photos", photoControllers.add);
router.delete("/photos/:id", photoControllers.destroy);
router.put("/viewer/:id", hashPassword, viewerControllers.edit);
router.put("/videos/:id", videoControllers.edit);
router.post("/submit");
router.delete("/videos/:id", videoControllers.destroy);

module.exports = router;
