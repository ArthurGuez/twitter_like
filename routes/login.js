// Modules
const express = require('express');
const passport = require('passport');

// Controller
const loginController = require('../controllers/login');

// Middlewares
const router = express.Router();
const checkAuth = require('../server');

// Routes
router.get('/login', checkAuth.checkNotAuthenticated, loginController.getPage);

// router.get('*', loginController.error);

router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
}));

// Export du fichier
module.exports = router;