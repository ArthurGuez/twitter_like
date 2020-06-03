let db = require('../config/db');

class User {

    static create (username, email, hashedPassword, cb) {
        db.query('INSERT INTO users SET username = ?, email = ?, password = ?', [username, email, hashedPassword], (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }

    static getUserByEmail (email, cb) {
        db.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
            if (err) throw err;
            cb(rows[0]);
        })
    }

    static getUserById (id, cb) {
        db.query('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
            if (err) throw err;
            cb(rows[0]);
        })
    }

}

module.exports = User;