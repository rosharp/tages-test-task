const mysql = require("mysql2/promise");

class Pool {
  constructor(data) {
    this.pool = mysql.createPool(data);
  }
}

module.exports = Pool;
