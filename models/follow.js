let db = require('../config/db');

class Follow {

    static follow (followerId, followedId, cb) {
        db.query('INSERT INTO follow SET follower_id = ?, followed_id = ?', [followerId, followedId], (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }

    static doIFollow (followerId, followedId, cb) {
        db.query('SELECT * FROM follow WHERE follower_id = ? AND followed_id = ?', [followerId, followedId], (err, res) => {
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

}

module.exports = Follow;