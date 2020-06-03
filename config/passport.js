const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt');

const initialize = (passport) => {
    const authenticateUser = (email, password, done) => {
        User.getUserByEmail(email, (user) => {
            if (user == null) {
                return done(null, false, { message: 'No user with that email'})
            }
            
            try {
                bcrypt.compare(password, user.password, (err, res) => {
                    if (res) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Password incorrect' });
                    }
                })
            } catch (err) {
                return done(err);
            }           
        });
    }

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));

    passport.serializeUser((user, done) => {
        return done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        User.getUserById(id, (user) => {
        return done(null, user);
        });
    })

}

module.exports = initialize;