let db = require('../config/db');
let moment = require('../middleware/moment');

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

    static create (content, username, idUser, cb) {
        db.query('INSERT INTO tweets SET content = ?, username = ?, date = ?, user_id = ?', [content, username, new Date(), idUser], (err, res) => {
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
        db.query('SELECT * FROM tweets ORDER BY date DESC', (err, rows) => {
            if (err) throw err;
            cb(rows.map((row) => new Tweet(row)));
        })
    }

    static findFollowing (following, cb) {        
        db.query('SELECT * FROM tweets JOIN follow ON tweets.user_id = follow.followed_id WHERE follow.follower_id = ?', [following], (err, rows) => {
            if (err) throw err;
            cb(rows.map((row) => new Tweet(row)));
        })
    }

}

module.exports = Tweet;