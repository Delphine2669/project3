const AbstractManager = require("./AbstractManager");

class ViewerManager extends AbstractManager {
  constructor() {
    super({ table: "viewer" });
  }

  insert(viewer) {
    return this.database.query(
      `INSERT INTO ${this.table} (username, email, birthday, isFavorite, isAdmin, hashedPassword) VALUES (?,?,?,?,?,?)`,
      [
        viewer.username,
        viewer.email,
        viewer.birthday,
        viewer.isFavorite,
        viewer.isAdmin,
        viewer.hashedPassword,
      ]
    );
  }

  update(viewer) {
    return this.database.query(
      `UPDATE ${this.table} SET username=?, email=?, birthday=?, isFavorite=?, isAdmin=? , hashedPassword =? WHERE id=?`,
      [
        viewer.username,
        viewer.email,
        viewer.birthday,
        viewer.isFavorite,
        viewer.isAdmin,
        viewer.hashedPassword,
        viewer.id,
      ]
    );
  }

  patch(viewer) {
    return this.database.query(
      `UPDATE ${this.table} SET username=?, email=?, birthday=?, isFavorite=?, isAdmin=? WHERE id=?`,
      [
        viewer.username,
        viewer.email,
        viewer.birthday,
        viewer.isFavorite,
        viewer.isAdmin,
        viewer.id,
      ]
    );
  }

  findByUsernameWithHashedPassword(viewer) {
    return this.database.query(
      `SELECT username, hashedPassword,isAdmin from  ${this.table} where username = ?`,
      [viewer.username]
    );
  }
}
module.exports = ViewerManager;
