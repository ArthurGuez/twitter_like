// Modules
const express = require('express');

// Controller
const startController = require('../controllers/start');

// Middlewares
const router = express.Router();
const checkAuth = require('../server');

// Routes

router.get('/', checkAuth.checkAuthenticated, startController.getPage);

module.exports = router;