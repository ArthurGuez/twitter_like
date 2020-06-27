const Tweet = require('../models/tweet');
const User = require('../models/user');
const Follow = require('../models/follow');

exports.loadHomePage = (req, res) => {
    Tweet.findFollowing(req.user.id, (tweet) => {
        User.showWhoToFollow(req.user.username, (user) => {
            Follow.doIFollow(req.user.id, req.body.follow, (doIFollow) => {
                res.render('home', { 
                    username: req.user.username,
                    tweet: tweet,
                    user: user,
                    doIFollow: doIFollow,
                    title: 'Home / Twitter' });
            });
        });
    });
};

exports.findProfile = (req, res) => {
    Tweet.findProfile(req.params.username, (tweet) => {
        res.render('profile', { tweet: tweet });
    });
};

exports.logOut = (req, res) => {
    req.logout();
    res.redirect('/login');
};

exports.error = (req, res) => {
    res.status(404).send('error');
};

exports.newTweet = (req, res) => {
    Tweet.create(req.body.tweet, req.user.username, req.user.id, () => {
        res.redirect('/home');
    });
};

exports.follow = (req, res) => {
    Follow.follow(req.user.id, req.body.follow[0], () => {
        res.redirect('/home');
    });
};

exports.unfollow = (req, res) => {
    Follow.unfollow(req.user.id, req.body.unfollow, () => {
        res.redirect('/home');
    });
};
