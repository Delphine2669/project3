const AbstractManager = require("./AbstractManager");

class ViewerManager extends AbstractManager {
  constructor() {
    super({ table: "viewer" });
  }

  insert(viewer) {
    return this.database.query(
      `INSERT INTO ${this.table} (username, email, birthday, is_favorite, is_admin, hashedPassword) VALUES (?,?,?,?,?,?)`,
      [
        viewer.username,
        viewer.email,
        viewer.birthday,
        viewer.is_favorite,
        viewer.is_admin,
        viewer.hashedPassword,
      ]
    );
  }

  update(viewer) {
    return this.database.query(
      `UPDATE ${this.table} SET username=?, email=?, birthday=?, is_favorite=?, is_admin=? , hashedPassword =? WHERE id=?`,
      [
        viewer.username,
        viewer.email,
        viewer.birthday,
        viewer.is_favorite,
        viewer.is_admin,
        viewer.hashedPassword,
        viewer.id,
      ]
    );
  }
}
module.exports = ViewerManager;
