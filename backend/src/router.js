const express = require("express");

const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const upload = multer({ dest: "./videos" });
const uploadPC = multer({ dest: "./image" });

// const photoStorage = multer.diskStorage({
//   destination: "./image",
//   filename: (req, file, cb) => {
//     const fileName = `${uuidv4()}-${file.originalname}`;
//     cb(null, fileName);
//   },
// });
// const videoStorage = multer.diskStorage({
//   destination: "./videos",
//   filename: (req, file, cb) => {
//     const fileName = `${uuidv4()}-${file.originalname}`;
//     cb(null, fileName);
//   },
// });

// const photoUpload = multer({ storage: photoStorage });
// const videoUpload = multer({ storage: videoStorage });

const {
  hashPassword,
  verifyPassword,
  verifyToken,
  checkingUser,
} = require("./middlewares/services/auth");

const videoControllers = require("./controllers/videoControllers");
const catControllers = require("./controllers/catControllers");
const videoCatControllers = require("./controllers/videoCatControllers");
const photoControllers = require("./controllers/photoControllers");
const viewerControllers = require("./controllers/viewerControllers");
const authControllers = require("./controllers/authControllers");

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.read);
router.get("/categories", catControllers.getCategories);
router.get("/categories/:id", videoCatControllers.filterByCategory);
router.get("/photos", photoControllers.browse);
router.get("/photos/:id", photoControllers.read);
router.get("/viewers", viewerControllers.browse);
router.get("/viewers/:id", viewerControllers.read);

router.post(
  "/videos",
  upload.single("videoData"),
  (req, res, next) => {
    const { originalname, filename } = req.file;
    const nickname = `${uuidv4()}-${originalname}`;
    const path2 = `/videos/${nickname}`;
    const ourPath = `./public/assets/videos/${nickname}`;
    fs.rename(`./videos/${filename}`, ourPath, (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        req.videoData = {
          title: req.body.title,
          time: req.body.time,
          description: req.body.description,
          publicationDate: req.body.publicationDate,
          isAccessible: req.body.isAccessible,
          videoData: path2,
        };
        next();
      }
    });
  },
  videoControllers.add
);

router.post(
  "/photos",
  uploadPC.single("imageSrc"),
  (req, res, next) => {
    const { originalname, filename } = req.file;
    const nickname = `${uuidv4()}-${originalname}`;
    const path2 = `/image/${nickname}`;
    const ourPath = `./public/assets/image/${nickname}`;
    fs.rename(`./image/${filename}`, ourPath, (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      } else {
        req.photoData = {
          title: req.body.title,
          description: req.body.description,
          imageSrc: path2,
        };
        next();
      }
    });
  },
  photoControllers.add
);
// router.post(
//   "/photos",
//   uploadPC.single("imageSrc"),
//   (req, res, next) => {
//     const { originalname, filename } = req.file;
//     console.info("filename:", filename);

//     console.info("req.file router 1st console info:", req.file);
//     const nickname2 = `${uuidv4()}-${originalname}`;
//     const path2 = `/image/${nickname2}`;
//     const ourPath2 = `./public/assets/image/${nickname2}`;
//     fs.rename(`./image/${filename}`, ourPath2, (err) => {
//       console.info("ourPath2:", ourPath2);
//       console.info("nickname:", nickname2);
//       if (err) {
//         console.error(err);
//         res
//           .status(500)
//           .json({ error: "File renaming failed", details: err.message });
//       } else {
//         req.photo = {
//           title: req.body.title,
//           description: req.body.description,
//           imageSrc: path2,
//         };
//         console.info(
//           "req.photo router console info router after rename :",
//           req.photo
//         );
//         console.info("Received payload on the server:", req.body.payload);
//         console.info(
//           "payload json in controller:",
//           JSON.parse(req.body.payload)
//         );
//         console.info("req.body payload controller:", req.body);
//         next();
//         console.info("path2 router console info apres next :", path2);
//       }
//     });
//   },
//   (req, res) => {
//     // Additional logging for debugging
//     console.info("Received payload on the server:", req.body.payload);

//     photoControllers.add(req, res);
//   }
// );
router.put(
  "/videos/:id",
  // upload.single("videoData"),
  // (req, res, next) => {
  //   const { originalname, filename } = req.file;
  //   const ourPath = `./public/uploads/${uuidv4()}-${originalname}`;
  //   fs.rename(`./public/uploads/${filename}`, ourPath, (err) => {
  //     if (err) {
  //       console.error(err);
  //       return res.sendStatus(500);
  //     }
  //     req.videoData = {
  //       title: req.body.title,
  //       time: req.body.time,
  //       description: req.body.description,
  //       publicationDate: req.body.publication_date,
  //       isAccessible: req.body.is_accessible,
  //       videoData: ourPath,
  //     };
  //     return null;
  //   });
  //   next();
  // },
  videoControllers.edit
);

router.post("/viewers", hashPassword, checkingUser, viewerControllers.add);

router.post(
  "/login",
  authControllers.getUserByUsernameWithPasswordAndPassToNext,
  verifyPassword
);

router.put("/photos/:id", photoControllers.edit);
router.post("/photos", photoControllers.add);
router.delete("/photos/:id", photoControllers.destroy);

router.put("/viewers/:id", hashPassword, viewerControllers.edit);
router.delete("/viewers/:id", verifyToken, viewerControllers.destroy);

router.put("/videos/:id", verifyToken, videoControllers.edit);
router.delete("/videos/:id", verifyToken, videoControllers.destroy);
router.post("/videos", verifyToken, videoControllers.add);

router.get("/viewers/:id", viewerControllers.read);

module.exports = router;
