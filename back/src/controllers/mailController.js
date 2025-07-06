const nodemailer = require('nodemailer')
const MailModel = require('../models/mailModel')

const enviarCorreo = async (req, res) => {
  const { name, email, message } = req.body

  const data = new MailModel(name, email, message)

  if (!data.name || !data.email || !data.message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  const mailOptions = {
    from: `"${data.name}" <${data.email}>`,
    to: process.env.EMAIL_USER,
    subject: 'Nuevo mensaje desde el formulario',
    text: `
Nombre: ${data.name}
Email: ${data.email}
Mensaje: ${data.message}
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ mensaje: 'Correo enviado correctamente' })
  } catch (error) {
    console.error('Error al enviar correo:', error)
    res.status(500).json({ error: 'Error al enviar el correo' })
  }
}

module.exports = { enviarCorreo }
