const express = require('express')
const router = express.Router()
const {
  getAppointmentsAll,
  addAppointment,
  fetchAppointments
} = require('../src/controllers/appointmentController')

router.get('/', getAppointmentsAll)
router.post('/', addAppointment)
router.get('/schedules', fetchAppointments)

module.exports = router
