const express = require('express')
const router = express.Router()
const { submitContact, submitReferral } = require('../controllers/contactController')

router.post('/submit', submitContact)
router.post('/referral', submitReferral)

module.exports = router
