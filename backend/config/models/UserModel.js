const db = require('../config/db');
const bcrypt = require('bcrypt');

const UserModel = {
  create: async (user, callback) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const sql = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [user.name, user.email, hashedPassword], callback);
  },

  findByEmail: (email, callback) => {
    const sql = 'SELECT * FROM user WHERE email = ?';
    db.query(sql, [email], callback);
  },
};

module.exports = UserModel;
