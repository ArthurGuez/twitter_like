// Modules
const express = require('express');

// Controller
const signUpController = require('../controllers/signup');

// Middlewares
const router = express.Router();

// Routes
router.get('/signup', signUpController.getPage);

router.post('/signup', signUpController.signUp);

// Export du fichier
module.exports = router;