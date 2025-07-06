const {
  getAllAppointments,
  createAppointment,
  getAppointments
} = require('../models/appointmentModel')

const getAppointmentsAll = async (req, res) => {
  try {
    const appointments = await getAllAppointments()
    res.json(appointments)
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener citas' })
  }
}

const addAppointment = async (req, res) => {
  const { date, time, clientName, clientEmail, rut, phone, service } = req.body

  // Validar campos obligatorios
  if (
    !date ||
    !time ||
    !clientName ||
    !clientEmail ||
    !rut ||
    !phone ||
    !service
  ) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' })
  }

  try {
    const newAppointment = await createAppointment({
      date,
      time,
      clientName,
      clientEmail,
      rut,
      phone,
      service
    })
    res.status(201).json(newAppointment)
  } catch (err) {
    console.error('Error al crear cita:', err)
    res.status(500).json({ error: 'Error al crear la cita' })
  }
}

const fetchAppointments = async (req, res) => {
  try {
    const appointments = await getAppointments()
    res.json(appointments)
  } catch (error) {
    console.error('Error al obtener citas:', error)
    res.status(500).json({ error: 'Error al obtener citas' })
  }
}
module.exports = {
  getAppointmentsAll,
  addAppointment,
  fetchAppointments
}
