require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT

const authRoutes = require('./routes/auth.routes')
const appointmentRoutes = require('./routes/appointment.routes')
const mailRoutes = require('./routes/mail.routes')

app.use(cors())
app.use(express.json())
app.use('/api', authRoutes)
app.use('/api/appointments', appointmentRoutes)
app.use('/api/mail', mailRoutes)

app.listen(
  PORT,
  console.log(
    `Servidor corriendo en el puerto ${PORT}. Puede acceder a la url aqui: http://localhost:${PORT}`
  )
)
