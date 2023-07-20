const AbstractManager = require("./AbstractManager");

class VideoCatManager extends AbstractManager {
  constructor() {
    super({ table: "videoCat" });
  }

  findByCategory(category) {
    return this.database.query(
      `SELECT * FROM video as v
      INNER JOIN videoCat as vc ON v.id = vc.videos_id
      INNER JOIN category as c ON vc.category_id = c.id
      WHERE c.id = ?`,
      [category]
    );
  }
}

module.exports = VideoCatManager;
