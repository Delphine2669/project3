const fastcsv = require("fast-csv");
const models = require("../models");

const browse = (req, res) => {
  models.viewer
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error retrieving data from database");
    });
};

const read = (req, res) => {
  models.viewer
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
      res.status(500).send("error retrieving data from database");
    });
};

const edit = (req, res) => {
  const viewerId = parseInt(req.params.id, 10);
  const viewerData = req.body;
  models.viewer
    .update(viewerData, viewerId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error editing data from database");
    });
};

const patch = (req, res) => {
  const viewerId = parseInt(req.params.id, 10);
  const viewerData = req.body;
  models.viewer
    .patch(viewerData, viewerId)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error patching data from database");
    });
};

const add = (req, res) => {
  const viewer = {
    username: req.body.username,
    birthday: req.body.birthday,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
    isFavorite: req.body.isFavorite,
    hashedPassword: req.body.hashedPassword,
  };
  models.viewer
    .insert(viewer)
    .then(([result]) => {
      res.location(`/viewers/${result.insertId}`).sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("error saving data into the database");
    });
};

const destroy = (req, res) => {
  models.viewer
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
      res.status(500).send("error deleting data from database");
    });
};
const exportToCSV = async (req, res) => {
  try {
    const viewers = await models.viewer.findAll();
    console.info("viewers:", viewers);
    const viewerArray = viewers[0];

    const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    const fileName = `exported_file_${timestamp}.csv`;

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);

    fastcsv.write(viewerArray, { headers: true }).pipe(res);
  } catch (error) {
    console.error("Error exporting to CSV:", error);
    res.status(500).send("Error exporting to CSV");
  }
};
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  patch,
  exportToCSV,
};
