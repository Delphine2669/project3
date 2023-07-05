const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.database.query(
      `insert into ${this.table} (title, time, description, publication_date, is_favorite, is_accessible, data ) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        video.title,
        video.time,
        video.description,
        video.publication_date,
        video.is_favorite,
        video.is_accessible,
        video.data,
      ]
    );
  }

  update(video) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?, time = ?, description = ?, publication_date = ?, is_favorite = ?, is_accessible = ?, data = ?`,
      [
        video.title,
        video.id,
        video.time,
        video.description,
        video.publication_date,
        video.is_favorite,
        video.is_accessible,
        video.data,
      ]
    );
  }
}

module.exports = VideoManager;
