// Modules
const express = require('express');

// Controller
const homeController = require('../controllers/home');

// Middlewares
const router = express.Router();
const checkAuth = require('../server');

// Routes

router.get('/logout', homeController.logOut);

router.get('/home', checkAuth.checkAuthenticated, homeController.loadHomePage);

router.get('/:username', checkAuth.checkAuthenticated, homeController.findProfile);

router.get('*', homeController.error);

router.post('/home', homeController.newTweet);

router.post('/follow', homeController.follow);

router.post('/unfollow', homeController.unfollow);

// Export du fichier
module.exports = router;