const express = require('express');
const router = express.Router()
const indexController = require('../controllers/indexController');

router.get('/', indexController.index_Index)

module.exports = router