// Environnement de dev ou de prod
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Modules
const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const Handlebars = require("handlebars");
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

// Instanciation serveur Express
const app = express();

// Instanciation Passport
const initializePassport = require('./config/passport');
initializePassport(passport);

// Moteur de templates 
app.engine('handlebars', exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');
app.use("/assets", express.static("assets"));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize()),
app.use(passport.session());

exports.checkAuthenticated = (req, res, next) => {
    console.log("working")
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

exports.checkNotAuthenticated = (req, res, next) => {
    console.log("working bis")
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/home');
}

// Routes
const loginRouter = require("./routes/login");
const signUpRouter = require("./routes/signup");
const homeRouter = require("./routes/home");

app.use(loginRouter);
app.use(signUpRouter);
app.use(homeRouter);

// Listener sur port 8080
app.listen(8080, () => {
    console.log("Server running at port 8080");
});