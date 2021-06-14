const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const authMiddleware = require('../middleware/auth');

router.post('/add', authMiddleware, fileController.addFiles);
router.get('', authMiddleware, fileController.getFiles);

module.exports = router;