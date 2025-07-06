const db = require('../../db/index')

const findUserByEmail = async (email) => {
  const res = await db.query('SELECT * FROM users WHERE email = $1', [email])
  return res.rows[0]
}

module.exports = { findUserByEmail }
