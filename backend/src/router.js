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

router.get("/videos/:id", videoControllers.read);
router.get("/videos", videoControllers.browse);
const viewerControllers = require("./controllers/viewerControllers");

router.get("/viewer", viewerControllers.browse);
router.get("/viewer/:id", viewerControllers.read);

router.post("/videos", upload.single("videoData"), (req, res) => {
  const { originalname } = req.file;
  const { filename } = req.file;
  fs.rename(
    `./public/uploads/${filename}`,
    `./public/uploads/${uuidv4()}-${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});
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
router.put("/viewer/:id", hashPassword, viewerControllers.edit);
router.put("/videos/:id", videoControllers.edit);
router.post("/submit");
router.delete("/videos/:id", videoControllers.destroy);

module.exports = router;
