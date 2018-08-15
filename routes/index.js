const express = require('express');
const router = express.Router();
const superAdminController = require('../controllers/superAdminController');

router.get(`/`, superAdminController.home);

module.exports = router;