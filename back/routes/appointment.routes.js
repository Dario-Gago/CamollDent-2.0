const express = require('express')
const router = express.Router()
const {
  getAppointmentsAll,
  addAppointment,
  fetchAppointments
} = require('../src/controllers/appointmentController')
const verifyToken = require('../middlewares/authMiddleware')

router.get('/', verifyToken, getAppointmentsAll)
router.post('/', addAppointment)
router.get('/schedules', fetchAppointments)

module.exports = router
