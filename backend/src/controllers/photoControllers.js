const models = require("../models");

const browse = (req, res) => {
  models.photo
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.photo
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const photoId = parseInt(req.params.id, 10);
  const photoData = req.body;

  // TODO validations (length, format...)

  models.photo
    .update(photoData, photoId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  try {
    // const payload = JSON.parse(req.body.payload);
    // const { title, description, imageSrc } = payload;
    // console.info("payload json in controller:", payload);
    // req.photo = {
    //   title,
    //   description,
    //   imageSrc,
    // };
    // eslint-disable-next-line no-unused-vars
    const photoData = req.body;
    console.info("req.body payload controller:", req.photoData);

    // TODO validations (length, format...)

    models.photo
      .insert(req.photoData)
      .then(([result]) => {
        res.location(`/photos/${result.insertId}`).sendStatus(201);
        console.info("inserted result controller add:", [result]);
        console.info("req.photo controller add:", req.photo);
      })

      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } catch (error) {
    console.error("Error parsing JSON:", error);
    res.status(400).send("Invalid JSON payload");
  }
};

const destroy = (req, res) => {
  models.photo
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
