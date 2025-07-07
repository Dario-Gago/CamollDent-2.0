import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Sparkles,
  Heart
} from 'lucide-react'

const Agend = () => {
  // Estados
  const [takenAppointments, setTakenAppointments] = useState([])
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [loading, setLoading] = useState(false)
  const [clientRut, setClientRut] = useState('')
  const [clientPhone, setClientPhone] = useState('')

  const url = import.meta.env.VITE_API_URL

  // Horarios disponibles
  const availableSlots = [
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00'
  ]

  // Servicios disponibles
  const services = [
    {
      id: 'Evaluación particular',
      name: 'Evaluación particular',
      duration: '15 min',
      price: '$10.000'
    },
    {
      id: 'Evaluación ortodoncia',
      name: 'Evaluación ortodoncia',
      duration: '15 min',
      price: '$15.000'
    }
  ]

  // Función para obtener citas ocupadas
  const fetchTakenAppointments = async () => {
    try {
      const res = await axios.get(`${url}/appointments/schedules`)
      console.log('Citas ocupadas recibidas:', res.data) // Debug
      setTakenAppointments(res.data)
    } catch (error) {
      console.error('Error al obtener citas ocupadas:', error)
      // SweetAlert para error de carga
      Swal.fire({
        icon: 'warning',
        title: 'Error de conexión',
        text: 'No se pudieron cargar los horarios ocupados. Algunos horarios pueden aparecer como disponibles cuando no lo están.',
        confirmButtonColor: '#51b7c7',
        background: '#fff',
        color: '#374151'
      })
    }
  }

  // Efecto para cargar citas ocupadas al montar el componente
  useEffect(() => {
    fetchTakenAppointments()
  }, [])

  // Función para obtener horarios disponibles
  const getAvailableTimes = () => {
    if (!selectedDate) return availableSlots

    console.log('Fecha seleccionada:', selectedDate) // Debug
    console.log('Citas ocupadas:', takenAppointments) // Debug

    const takenTimesForDate = takenAppointments
      .filter((appt) => {
        // Normalizar la fecha para comparación
        const apptDate = new Date(appt.date).toISOString().split('T')[0]
        console.log('Comparando:', apptDate, 'con', selectedDate) // Debug
        return apptDate === selectedDate
      })
      .map((appt) => {
        // Normalizar el tiempo - obtener solo HH:MM
        const time = appt.time.includes(':') ? appt.time.slice(0, 5) : appt.time
        console.log('Tiempo ocupado:', time) // Debug
        return time
      })

    console.log('Horarios ocupados para esta fecha:', takenTimesForDate) // Debug

    const availableForDate = availableSlots.filter(
      (time) => !takenTimesForDate.includes(time)
    )
    console.log('Horarios disponibles:', availableForDate) // Debug

    return availableForDate
  }

  // Generar fechas para las próximas 2 semanas
  const generateDates = () => {
    const dates = []
    const today = new Date()

    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      // Excluir sábados (6) y domingos (0)
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('es-ES', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
          }),
          fullDate: date
        })
      }
    }

    return dates
  }

  // Obtener información del servicio seleccionado
  const selectedServiceInfo = services.find((s) => s.id === selectedService)

  // Función para formatear fecha
  const formatSelectedDate = (dateString) => {
    const date = new Date(dateString + 'T00:00:00')
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Manejar envío del formulario
  const handleSubmit = async () => {
    // Validación de campos obligatorios
    if (
      !selectedDate ||
      !selectedTime ||
      !clientName ||
      !clientEmail ||
      !clientRut ||
      !clientPhone ||
      !selectedService
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor completa todos los campos para continuar.',
        confirmButtonColor: '#51b7c7',
        background: '#fff',
        color: '#374151'
      })
      return
    }

    // Validación de email
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!validateEmail(clientEmail)) {
      Swal.fire({
        icon: 'error',
        title: 'Email inválido',
        text: 'Por favor ingresa un email válido.',
        confirmButtonColor: '#51b7c7',
        background: '#fff',
        color: '#374151'
      })
      return
    }

    // Validación de RUT
    const validateRut = (rut) => /^[0-9]{7,8}-[0-9kK]$/.test(rut)
    if (!validateRut(clientRut)) {
      Swal.fire({
        icon: 'error',
        title: 'RUT inválido',
        text: 'Ingresa un RUT válido (Ej: 12345678-9)',
        confirmButtonColor: '#51b7c7',
        background: '#fff',
        color: '#374151'
      })
      return
    }

    // Validación de teléfono
    const validatePhone = (phone) => /^(\+56)?9\d{8}$/.test(phone)
    if (!validatePhone(clientPhone)) {
      Swal.fire({
        icon: 'error',
        title: 'Teléfono inválido',
        text: 'El número debe ser válido y comenzar con +56 o 9',
        confirmButtonColor: '#51b7c7',
        background: '#fff',
        color: '#374151'
      })
      return
    }

    // Confirmación
    const result = await Swal.fire({
      title: '¿Confirmar cita?',
      html: `
      <div style="text-align: left; margin: 20px 0;">
        <p><strong>Servicio:</strong> ${selectedServiceInfo?.name}</p>
        <p><strong>Fecha:</strong> ${formatSelectedDate(selectedDate)}</p>
        <p><strong>Hora:</strong> ${selectedTime}</p>
        <p><strong>Cliente:</strong> ${clientName}</p>
        <p><strong>Email:</strong> ${clientEmail}</p>
        <p><strong>RUT:</strong> ${clientRut}</p>
        <p><strong>Teléfono:</strong> ${clientPhone}</p>
        <p><strong>Precio:</strong> ${selectedServiceInfo?.price}</p>
      </div>
    `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#51b7c7',
      cancelButtonColor: '#ef4444',
      confirmButtonText: '✅ Confirmar',
      cancelButtonText: '❌ Cancelar',
      background: '#fff',
      color: '#374151'
    })

    if (!result.isConfirmed) return

    setLoading(true)

    const appointmentData = {
      date: selectedDate,
      time: selectedTime,
      clientName,
      clientEmail,
      rut: clientRut,
      phone: clientPhone,
      service: selectedService
    }

    try {
      const response = await axios.post(`${url}/appointments`, appointmentData)

      if (response.status === 200 || response.status === 201) {
        await Swal.fire({
          icon: 'success',
          title: '¡Cita Agendada!',
          html: `
          <div style="text-align: center; margin: 20px 0;">
            <p>Tu cita ha sido confirmada exitosamente para:</p>
            <p><strong>${formatSelectedDate(selectedDate)}</strong></p>
            <p><strong>${selectedTime}</strong></p>
            <p style="margin-top: 15px; padding: 10px; background: #f0f9ff; border-radius: 8px; color: #0369a1;">
              📧 Se enviará un email de confirmación a <strong>${clientEmail}</strong>
            </p>
          </div>
        `,
          confirmButtonColor: '#51b7c7',
          background: '#fff',
          color: '#374151',
          timer: 5000,
          timerProgressBar: true
        })

        await fetchTakenAppointments()

        // Resetear formulario
        setSelectedDate('')
        setSelectedTime('')
        setClientName('')
        setClientEmail('')
        setClientRut('')
        setClientPhone('')
        setSelectedService('')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al agendar',
          text: 'No se pudo agendar la cita. Intenta nuevamente.',
          confirmButtonColor: '#51b7c7',
          background: '#fff',
          color: '#374151'
        })
      }
    } catch (error) {
      console.error('Error al agendar cita:', error)

      if (error.response?.status === 409) {
        Swal.fire({
          icon: 'warning',
          title: 'Horario no disponible',
          text: 'Este horario ya fue tomado por otro cliente. Por favor selecciona otro horario.',
          confirmButtonColor: '#51b7c7',
          background: '#fff',
          color: '#374151'
        })
        await fetchTakenAppointments()
      } else if (error.response?.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Datos incorrectos',
          text:
            error.response?.data?.message ||
            'Los datos enviados no son válidos.',
          confirmButtonColor: '#51b7c7',
          background: '#fff',
          color: '#374151'
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error de conexión',
          text: 'Hubo un problema al conectar con el servidor. Verifica tu conexión e intenta nuevamente.',
          confirmButtonColor: '#51b7c7',
          background: '#fff',
          color: '#374151'
        })
      }
    } finally {
      setLoading(false)
    }
  }

  // Resetear hora seleccionada cuando cambia la fecha
  useEffect(() => {
    if (selectedDate) {
      setSelectedTime('')
    }
  }, [selectedDate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header con gradiente */}
        <div className="bg-gradient-to-r from-[#51b7c7] to-[#a7c527] rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="text-center text-white">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-12 h-12 mr-4" />
              <h1 className="text-4xl font-bold">Agenda tu Cita</h1>
            </div>
            <p className="text-xl opacity-90">
              Selecciona la fecha, hora y servicio que prefieras
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <Sparkles className="w-6 h-6 animate-pulse" />
              <Heart className="w-6 h-6 animate-bounce" />
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-t-[#51b7c7]">
          <div className="space-y-8">
            {/* Información del Cliente */}
            <div className="bg-gradient-to-r from-[#51b7c7]/5 to-[#a7c527]/5 p-6 rounded-xl border-l-4 border-l-[#51b7c7]">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <User className="w-7 h-7 mr-3 text-[#51b7c7]" />
                Información Personal
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#51b7c7] focus:border-transparent transition-all duration-300 hover:border-[#51b7c7]/50"
                    placeholder="Ingresa tu nombre completo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#51b7c7] focus:border-transparent transition-all duration-300 hover:border-[#51b7c7]/50"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    RUT
                  </label>
                  <input
                    type="text"
                    value={clientRut}
                    onChange={(e) => setClientRut(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#51b7c7] focus:border-transparent transition-all duration-300 hover:border-[#51b7c7]/50"
                    placeholder="Ej: 12.345.678-9"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#51b7c7] focus:border-transparent transition-all duration-300 hover:border-[#51b7c7]/50"
                    placeholder="Ej: +56912345678"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Selección de Servicio */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Sparkles className="w-7 h-7 mr-3 text-[#a7c527]" />
                Selecciona el Servicio
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`p-6 border-3 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                      selectedService === service.id
                        ? 'border-[#51b7c7] bg-gradient-to-r from-[#51b7c7]/10 to-[#a7c527]/10 shadow-xl'
                        : 'border-gray-200 hover:border-[#51b7c7]/50 bg-white'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg text-gray-800 mb-2">
                          {service.name}
                        </h4>
                        <p className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">
                          ⏱️ {service.duration}
                        </p>
                      </div>
                      <span className="text-2xl font-bold text-[#a7c527] bg-[#a7c527]/10 px-4 py-2 rounded-full">
                        {service.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selección de Fecha */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Calendar className="w-7 h-7 mr-3 text-[#51b7c7]" />
                Selecciona la Fecha
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {generateDates().map((date) => (
                  <button
                    key={date.value}
                    type="button"
                    onClick={() => setSelectedDate(date.value)}
                    className={`p-4 text-sm rounded-xl border-2 transition-all duration-300 transform hover:scale-105 font-semibold ${
                      selectedDate === date.value
                        ? 'border-[#51b7c7] bg-gradient-to-r from-[#51b7c7] to-[#a7c527] text-white shadow-lg'
                        : 'border-gray-200 hover:border-[#51b7c7] text-gray-700 bg-white hover:bg-[#51b7c7]/5'
                    }`}
                  >
                    {date.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Selección de Hora */}
            {selectedDate && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Clock className="w-7 h-7 mr-3 text-[#a7c527]" />
                  Horarios Disponibles
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {getAvailableTimes().map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`p-4 text-sm rounded-xl border-2 transition-all duration-300 transform hover:scale-105 font-semibold ${
                        selectedTime === time
                          ? 'border-[#a7c527] bg-gradient-to-r from-[#a7c527] to-[#51b7c7] text-white shadow-lg'
                          : 'border-gray-200 hover:border-[#a7c527] text-gray-700 bg-white hover:bg-[#a7c527]/5'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {getAvailableTimes().length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500 text-lg">
                      😔 No hay horarios disponibles para esta fecha
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      Por favor selecciona otra fecha
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Resumen */}
            {selectedDate && selectedTime && selectedService && (
              <div className="bg-gradient-to-r from-[#51b7c7]/10 to-[#a7c527]/10 p-6 rounded-xl border-l-4 border-l-[#a7c527] animate-fadeIn">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <CheckCircle className="w-7 h-7 mr-3 text-[#a7c527]" />
                  Resumen de tu Cita
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Servicio</p>
                      <p className="font-bold text-[#51b7c7]">
                        {selectedServiceInfo?.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        ({selectedServiceInfo?.duration})
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Fecha</p>
                      <p className="font-bold text-[#51b7c7]">
                        {formatSelectedDate(selectedDate)}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Hora</p>
                      <p className="font-bold text-[#51b7c7]">{selectedTime}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600">Cliente</p>
                      <p className="font-bold text-[#51b7c7]">{clientName}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-white p-4 rounded-lg text-center">
                  <p className="text-sm text-gray-600">Total a pagar</p>
                  <p className="text-3xl font-bold text-[#a7c527]">
                    {selectedServiceInfo?.price}
                  </p>
                </div>
              </div>
            )}

            {/* Botón de Confirmación */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#51b7c7]/50 ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#51b7c7] to-[#a7c527] text-white hover:from-[#a7c527] hover:to-[#51b7c7]'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  '✨ Confirmar Cita ✨'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agend
