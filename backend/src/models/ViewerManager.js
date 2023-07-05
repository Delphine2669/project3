const AbstractManager = require("./AbstractManager");

class ViewerManager extends AbstractManager {
  constructor() {
    super({ table: "viewer" });
  }
}
module.exports = ViewerManager;
