const passport = require('passport');

exports.getPage = (req, res) => {
    res.render('login', { 
        error: req.flash('error'),
        title: 'Twitter / Login'});
};

exports.error = (req, res) => {
    res.status(404).send('error');
};

// exports.login = () => passport.authenticate('local', {
//     successRedirect: '/home',
//     failureRedirect: '/login',
//     failureFlash: true
// })