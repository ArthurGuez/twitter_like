// Modules
const express = require('express');

// Controller
const homeController = require('../controllers/home');

// Middlewares
const router = express.Router();

// Routes
router.get('/home', homeController.findAll);

router.get('/:username', homeController.findProfile);

router.get('*', homeController.error);

router.post('/home', homeController.create);

// Export du fichier
module.exports = router;