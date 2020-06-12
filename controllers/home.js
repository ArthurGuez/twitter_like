const Tweet = require('../models/tweet');
const User = require('../models/user');

exports.loadHomePage = (req, res) => {
    Tweet.findFollowing(req.user.id, (tweet) => {
        User.showWhoToFollow(req.user.username, (user) => {
            res.render('home', { 
                username: req.user.username,
                tweet: tweet,
                user: user,
                title: 'Home / Twitter' });
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
    User.follow(req.user.id, req.params.id, () => {
        res.redirect('/home');
    });
};

exports.doIFollow = (req, res) => {
    User.doIFollow(req.user.id, req.body.id, () => {

    });
};

exports.unfollow = (req, res) => {
    User.unfollow(req.user.id, req.params.id, () => {
        res.redirect('/home');
    })
}

