const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/auth');

router.patch('/', authMiddleware, profileController.editMain);
router.patch('/contacts', authMiddleware, profileController.editContacts);
router.patch('/interests', authMiddleware, profileController.editInterests);
router.patch('/education', authMiddleware, profileController.editEducation);
router.patch('/career', authMiddleware, profileController.editCareer);

module.exports = router;