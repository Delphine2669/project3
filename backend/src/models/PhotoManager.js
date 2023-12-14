const AbstractManager = require("./AbstractManager");

class PhotoManager extends AbstractManager {
  constructor() {
    super({ table: "photo" });
  }

  insert(photo) {
    return this.database.query(
      `insert into ${this.table} ( title, description, imageSrc ) values (?, ?, ?)`,
      [photo.title, photo.description, photo.imageSrc]
    );
  }

  update(photo) {
    return this.database.query(
      `update ${this.table} set title = ?, description = ?, imageSrc = ? where id = ?`,
      [photo.title, photo.description, photo.imageSrc, photo.id]
    );
  }
}

module.exports = PhotoManager;
