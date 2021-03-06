const express = require('express')
const router = express.Router()

const AuthController = require('./authController')

router.post('/register', AuthController.register)

module.exports = router