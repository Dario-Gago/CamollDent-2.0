const db = require('../../db/index')
const getAllAppointments = async () => {
  const result = await db.query(
    'SELECT * FROM appointments ORDER BY date, time'
  )
  return result.rows
}

const createAppointment = async ({
  date,
  time,
  clientName,
  clientEmail,
  rut,
  phone,
  service
}) => {
  const result = await db.query(
    `INSERT INTO appointments (date, time, client_name, client_email, rut, phone, service)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [date, time, clientName, clientEmail, rut, phone, service]
  )
  return result.rows[0]
}

const getAppointments = async () => {
  const result = await db.query('SELECT date, time FROM appointments')
  return result.rows
}

module.exports = {
  getAllAppointments,
  createAppointment,
  getAppointments
}
