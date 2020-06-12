let db = require('../config/db');

class User {
    constructor(row) {
        this._row = row;
    }

    get username() {
        return this._row.username;
    }

    get id() {
        return this._row.id;
    }

    static newUser (username, email, hashedPassword, cb) {
        db.query('INSERT INTO users SET username = ?, email = ?, password = ?', [username, email, hashedPassword], (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }

    static follow (followerId, followedId, cb) {
        db.query('INSERT INTO follow SET follower_id = ?, followed_id = ?', [followerId, followedId], (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }

    static doIFollow (followerId, followedId, cb) {
        db.query('SELECT * FROM follow WHERE follower_id = ?, followed_id = ?', [followerId, followedId], (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }

    static unfollow (followerId, followedId, cb) {
        db.query('DELETE FROM follow WHERE follower_id = ?, followed_id = ?', [followerId, followedId], (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }

    static showWhoToFollow (username, cb) {
        db.query('SELECT * FROM users WHERE username != ?', [username], (err, rows) => {
            if (err) throw err;
            cb(rows.map((row) => new User(row)));
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