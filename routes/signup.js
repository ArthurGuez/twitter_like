// Modules
const express = require('express');

// Controller
const signUpController = require('../controllers/signup');

// Middlewares
const router = express.Router();
const checkAuth = require('../server');

// Routes
router.get('/signup', checkAuth.checkNotAuthenticated, signUpController.getPage);

// router.get('*', signUpController.error);

router.post('/signup', signUpController.signUp);

// Export du fichier
module.exports = router;