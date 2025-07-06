const express = require('express')
const router = express.Router()
const { enviarCorreo } = require('../src/controllers/mailController')

router.post('/', enviarCorreo)

module.exports = router
