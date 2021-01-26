const db = require("../db");
const ExpressError = require("../expressError")

class Cat {
  static async getAll() {
    let result = await db.query('SELECT * FROM cats');
    return result.rows;
  }
}
module.exports = Cat;

