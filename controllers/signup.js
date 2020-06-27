const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.getPage = (req, res) => {
    res.render('signup');
};

exports.signUp = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        User.newUser(req.body.username, req.body.email, hashedPassword, () => {
            res.redirect('/login');
        })
    } catch {
        res.redirect('/register');
    }
}