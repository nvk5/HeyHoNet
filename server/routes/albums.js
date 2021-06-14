const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');
const authMiddleware = require('../middleware/auth');

router.post('/create', authMiddleware, albumController.createAlbum);
router.get('', authMiddleware, albumController.getAlbums);

module.exports = router;