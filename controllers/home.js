const Tweet = require('../models/tweet');

exports.findAll = (req, res) => {
    Tweet.findAll((tweet) => {
        res.render('home', { name: req.user.username, tweet: tweet });
    });
};

exports.findProfile = (req, res) => {
    Tweet.findProfile(req.params.username, (tweet) => {
        res.render('profile', { tweet: tweet });
    });
};

exports.error = (req, res) => {
    res.status(404).send('error');
};

exports.create = (req, res) => {
    Tweet.create(req.body.tweet, req.user.username, () => {
        res.redirect('/home');
    });
};