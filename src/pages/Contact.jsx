import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const Contact = () => {
  const url = import.meta.env.VITE_API_URL
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos del formulario.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#51b7c7',
        background: '#ffffff',
        customClass: {
          popup: 'rounded-xl',
          title: 'text-gray-800',
          content: 'text-gray-600'
        }
      })
      return
    }

    // Mostrar loading
    Swal.fire({
      title: 'Enviando mensaje...',
      text: 'Por favor espera un momento',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      background: '#ffffff',
      customClass: {
        popup: 'rounded-xl'
      },
      didOpen: () => {
        Swal.showLoading()
      }
    })

    try {
      const res = await axios.post(`${url}/mail`, formData)

      // Éxito
      Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarnos. Te responderemos pronto.',
        icon: 'success',
        confirmButtonText: 'Perfecto',
        confirmButtonColor: '#51b7c7',
        background: '#ffffff',
        customClass: {
          popup: 'rounded-xl',
          title: 'text-gray-800',
          content: 'text-gray-600'
        }
      })

      // Limpiar formulario
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error al enviar el formulario:', error)

      // Error
      Swal.fire({
        title: 'Error al enviar',
        text: 'Hubo un problema al enviar tu mensaje. Por favor, intenta más tarde.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo',
        confirmButtonColor: '#51b7c7',
        background: '#ffffff',
        customClass: {
          popup: 'rounded-xl',
          title: 'text-gray-800',
          content: 'text-gray-600'
        }
      })
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-cyan-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#51b7c7] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#a7c527] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#51b7c7] to-[#a7c527] bg-clip-text text-transparent mb-4">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#51b7c7] to-[#a7c527] mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            En CamollDent estamos aquí para ayudarte. Puedes escribirnos por el
            formulario o comunicarte directamente con nosotros. ¡Tu sonrisa es
            nuestra prioridad!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h3 className="text-2xl font-bold text-[#51b7c7] mb-6">
                Información de contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#51b7c7] to-[#a7c527] rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Dirección</p>
                    <p className="text-gray-600">Azapa 1403</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#51b7c7] to-[#a7c527] rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Teléfono</p>
                    <p className="text-gray-600">+56 9 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#51b7c7] to-[#a7c527] rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@nunoadental.cl</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#51b7c7] to-[#a7c527] rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                    ⏰
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Horario</p>
                    <p className="text-gray-600">
                      Lunes a Viernes, 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional decorative card */}
            <div className="bg-gradient-to-r from-[#51b7c7] to-[#a7c527] rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">¿Por qué elegirnos?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p>Atención personalizada y profesional</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p>Tecnología de vanguardia</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p>Respuesta rápida a tus consultas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-[#51b7c7] mb-6">
              Envíanos un mensaje
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#51b7c7] focus:border-[#51b7c7] transition-all duration-300 bg-white/80"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#51b7c7] focus:border-[#51b7c7] transition-all duration-300 bg-white/80"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#51b7c7] focus:border-[#51b7c7] transition-all duration-300 bg-white/80 resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#51b7c7] to-[#a7c527] text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
              >
                Enviar mensaje ✨
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
