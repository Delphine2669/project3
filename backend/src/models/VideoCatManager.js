const AbstractManager = require("./AbstractManager");

class VideoCatManager extends AbstractManager {
  constructor() {
    super({ table: "video_has_categorie" });
  }

  getAllCategories() {
    return this.database.query(`SELECT c.name FROM categorie as c`);
  }

  findByCategory(category) {
    return this.database.query(
      `SELECT v.* FROM video as v
      INNER JOIN video_has_categorie as vc ON v.id = vc.videos_id
      INNER JOIN categorie as c ON vc.categories_nom_id = c.nom_id
      WHERE c.name = ?`,
      [category]
    );
  }
}

module.exports = VideoCatManager;
