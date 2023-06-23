const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    const { title, time, description, publication_date, is_favorite, is_accessible, data } = video;
    return this.database.query(`insert into ${this.table} (title, time, description, publication_date, is_favorite, is_accessible, data ) values (?, ?, ?, ?, ?, ?, ?)`, [
      title, time, description, publication_date, is_favorite, is_accessible, data]
    );
  }

  update(video) {
    const { title, time, description, publication_date, is_favorite, is_accessible, data } = video;
    return this.database.query(
      `update ${this.table} set title = ? where id = ?, time = ?, description = ?, publication_date = ?, is_favorite = ?, is_accessible = ?, data = ?`, 
      [title, id, time, description, publication_date, is_favorite, is_accessible, data]
    );
  }

}

module.exports = VideoManager;
