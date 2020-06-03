// const User = require('../models/user');
// const passport = require('passport');

exports.getPage = (req, res) => {
    res.render('login', { error: req.flash('error') });
};

// exports.login = () => passport.authenticate('local', {
//     successRedirect: '/home',
//     failureRedirect: '/login',
//     failureFlash: true
// })