const db = require("../db");
const ExpressError = require("../expressError")

class Cat {
  static async getAll() {
    let result = await db.query('SELECT * FROM cats');
    return result.rows;
  }
  static async getById(id) {
      const result = await db.query(`SELECT id,name,age FROM cats WHERE id=$1`, [id])
      if (result.rows.length === 0) {
        throw new ExpressError(`No cat with id of ${id}`, 404)
      }
      return result.rows[0];
  }
}
module.exports = Cat;

