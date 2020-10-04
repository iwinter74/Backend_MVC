
const express = require('express');
const router = express.Router()
const contactController = require('../controllers/contactController')

//contact_index
router.get('/contact', contactController.contact_index)
//contact_New
router.get('/contact/new', contactController.contact_New)
//contact_Add_New
router.post('/contact/new', contactController.contact_Add_New)

module.exports = router