let db = require('../config/db');
let moment = require('../config/moment');

class Tweet {
    constructor(row) {
        this._row = row;
    }

    get id() {
        return this._row.id;
    }

    get content() {
        return this._row.content;
    }

    get username() {
        return this._row.username;
    }

    get dateFromNow() {
        return moment(this._row.date).fromNow();
    }

    static create (content, username, cb) {
        db.query('INSERT INTO tweets SET content = ?, username = ?, date = ?', [content, username, new Date()], (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }

    static findProfile (username, cb) {
        db.query('SELECT * FROM tweets WHERE username = ?', [username], (err, rows) => {
            if (err) throw err;
            cb(rows.map((row) => new Tweet(row)));
        })
    }

    static findAll (cb) {
        db.query('SELECT * FROM tweets', (err, rows) => {
            if (err) throw err;
            cb(rows.map((row) => new Tweet(row)));
        })
    }
}

module.exports = Tweet;