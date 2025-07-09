const jwt = require('jsonwebtoken')
const { findUserByEmail } = require('../models/userModel')
require('dotenv').config()

const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await findUserByEmail(email)
    if (!user) return res.status(401).json({ message: 'Usuario no existe' })

    const validPassword = password === user.password
    if (!validPassword)
      return res.status(401).json({ message: 'Contraseña incorrecta' })

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '3h'
    })

    res.json({ token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error en el servidor' })
  }
}

module.exports = { login }
