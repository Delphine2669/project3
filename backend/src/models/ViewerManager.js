const AbstractManager = require("./AbstractManager");

class ViewerManager extends AbstractManager {
  constructor() {
    super({ table: "viewer" });
  }

  insert(viewer) {
    return this.database.query(
      `INSERT INTO ${this.table} (pseudo, email,mdp,birthday,is_favorite, is_admin) VALUES (?,?,?,?,?,?)`,
      [
        viewer.pseudo,
        viewer.email,
        viewer.mdp,
        viewer.birthday,
        viewer.is_favorite,
        viewer.is_admin,
      ]
    );
  }

  update(viewer) {
    return this.database.query(
      `UPDATE ${this.table} SET pseudo=?, email=?, mdp=?, birthday=?, is_favorite=?, is_admin=? WHERE id=?`,
      [
        viewer.pseudo,
        viewer.email,
        viewer.mdp,
        viewer.birthday,
        viewer.is_favorite,
        viewer.is_admin,
        viewer.id,
      ]
    );
  }

  getUserByEmailWithPasswordAndPassToNext(email) {
    return this.database.query(`SELECT * FROM ${this.table} where email =?`, [
      email,
    ]);
  }
}

module.exports = ViewerManager;
