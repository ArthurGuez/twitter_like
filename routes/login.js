// Modules
const express = require('express');
const passport = require('passport');

// Controller
const loginController = require('../controllers/login');

// Middlewares
const router = express.Router();

// Routes
router.get('/login', loginController.getPage);

router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
}));

// Export du fichier
module.exports = router;