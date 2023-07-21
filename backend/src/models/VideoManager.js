const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.database.query(
      `insert into ${this.table} (title, time, description, publicationDate, isFavorite, isAccessible, videoData ) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        video.title,
        video.time,
        video.description,
        video.publicationDate,
        video.isFavorite,
        video.isAccessible,
        video.videoData,
      ]
    );
  }

  update(video) {
    return this.database.query(
      `update ${this.table} set title = ?, time = ?, description = ?, publicationDate = ?, isFavorite = ?, isAccessible = ?, videoData = ? where id=?`,
      [
        video.title,
        video.time,
        video.description,
        video.publicationDate,
        video.isFavorite,
        video.isAccessible,
        video.videoData,
        video.id,
      ]
    );
  }
}

module.exports = VideoManager;
