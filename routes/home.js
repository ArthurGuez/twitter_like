// Modules
const express = require('express');

// Controller
const homeController = require('../controllers/home');

// Middlewares
const router = express.Router();
const checkAuth = require('../server');

// Routes
router.get('/home', checkAuth.checkAuthenticated, homeController.findAll);

router.get('/:username', checkAuth.checkAuthenticated, homeController.findProfile);

router.get('*', homeController.error);

router.post('/home', homeController.create);

// Export du fichier
module.exports = router;