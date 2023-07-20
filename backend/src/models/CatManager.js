const AbstractManager = require("./AbstractManager");

class CatManager extends AbstractManager {
  constructor() {
    super({ table: "category" });
  }

  getAllCategories() {
    return this.database.query(`SELECT id, name FROM category`);
  }
}

module.exports = CatManager;
