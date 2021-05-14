const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validationMiddleware = require('../middleware/validation');
const authMiddleware = require('../middleware/auth');

router.post('/signup', validationMiddleware, authController.signUp);
router.post('/login', validationMiddleware, authController.logIn);
router.get('/auth', authMiddleware, authController.auth);

module.exports = router;