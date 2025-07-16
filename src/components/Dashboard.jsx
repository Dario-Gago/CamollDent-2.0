import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../contexts/AuthContext'
import {
  LogOut,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CreditCard,
  Briefcase,
  EyeOff,
  Eye
} from 'lucide-react'
const url = import.meta.env.VITE_API_URL

const Dashboard = () => {
  const { logout, token } = useContext(AuthContext)
  const [appointments, setAppointments] = useState([])
  const [hiddenAppointments, setHiddenAppointments] = useState([])
  const [showHidden, setShowHidden] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true)

        if (!token) {
          setError('No hay token de autenticación')
          logout()
          return
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }

        const response = await axios.get(`${url}/appointments`, config)
        setAppointments(response.data)
        setError('')
      } catch (err) {
        console.error('Error al cargar citas:', err)

        if (err.response?.status === 401 || err.response?.status === 403) {
          setError('Sesión expirada. Por favor, inicia sesión nuevamente.')
          logout()
        } else {
          setError('Error al cargar las citas')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchAppointments()
  }, [token, logout])

  const formatDate = (dateString) => {
    const cleanDate = dateString.split('T')[0]
    const [year, month, day] = cleanDate.split('-')
    return `${day}/${month}/${year}`
  }

  const hideAppointment = (appointmentId) => {
    const appointmentToHide = appointments.find(
      (appt) => appt.id === appointmentId
    )
    if (appointmentToHide) {
      setHiddenAppointments((prev) => [...prev, appointmentToHide])
      setAppointments((prev) =>
        prev.filter((appt) => appt.id !== appointmentId)
      )
    }
  }

  const showAppointment = (appointmentId) => {
    const appointmentToShow = hiddenAppointments.find(
      (appt) => appt.id === appointmentId
    )
    if (appointmentToShow) {
      setAppointments((prev) => [...prev, appointmentToShow])
      setHiddenAppointments((prev) =>
        prev.filter((appt) => appt.id !== appointmentId)
      )
    }
  }

  const visibleAppointments = appointments.filter(
    (appt) => !hiddenAppointments.some((hidden) => hidden.id === appt.id)
  )

  const citasDeHoy = visibleAppointments.filter((appt) => {
    const apptDate = new Date(appt.date)
    const today = new Date()

    return (
      apptDate.getDate() === today.getDate() &&
      apptDate.getMonth() === today.getMonth() &&
      apptDate.getFullYear() === today.getFullYear()
    )
  })

  const isPastAppointmentRobust = (apptDateStr, apptTimeStr) => {
    try {
      let year, month, day

      if (apptDateStr.includes('-')) {
        ;[year, month, day] = apptDateStr.split('-')
      } else if (apptDateStr.includes('/')) {
        ;[day, month, year] = apptDateStr.split('/')
      } else {
        console.error('Formato de fecha no reconocido:', apptDateStr)
        return false
      }

      const [hours, minutes] = apptTimeStr.split(':')

      const appointmentDateTime = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day),
        parseInt(hours),
        parseInt(minutes)
      )

      if (isNaN(appointmentDateTime.getTime())) {
        console.error('Fecha inválida creada con:', {
          year,
          month,
          day,
          hours,
          minutes
        })
        return false
      }

      const now = new Date()
      return appointmentDateTime < now
    } catch (error) {
      console.error('Error al comparar fechas:', error)
      return false
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-lime-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Cargando citas...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-lime-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={logout}
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Volver al Login
          </button>
        </div>
      </div>
    )
  }

  const currentAppointments = showHidden
    ? hiddenAppointments
    : visibleAppointments

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-lime-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-gradient-to-r from-cyan-400 to-lime-400">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-lime-600 bg-clip-text text-transparent">
                  {showHidden ? 'Citas Ocultas' : 'Citas Agendadas'}
                </h1>
                <p className="text-gray-600 mt-2">
                  {showHidden
                    ? 'Estas citas han sido ocultadas temporalmente'
                    : 'Gestiona todas tus citas de manera eficiente'}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowHidden(!showHidden)}
                  className={`flex items-center gap-2 font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 ${
                    showHidden
                      ? 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white'
                      : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white'
                  }`}
                >
                  {showHidden ? <Eye size={20} /> : <EyeOff size={20} />}
                  {showHidden
                    ? `Mostrar Visibles (${visibleAppointments.length})`
                    : `Ver Ocultas (${hiddenAppointments.length})`}
                </button>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <LogOut size={20} />
                  Salir
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-cyan-100 text-sm font-medium">
                  {showHidden ? 'Citas Ocultas' : 'Citas Visibles'}
                </p>
                <p className="text-3xl font-bold">
                  {currentAppointments.length}
                </p>
              </div>
              <Calendar className="h-12 w-12 text-cyan-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lime-100 text-sm font-medium">
                  {showHidden ? 'Ocultas de Hoy' : 'Citas de Hoy'}
                </p>
                <p className="text-3xl font-bold">{citasDeHoy.length}</p>
              </div>
              <Clock className="h-12 w-12 text-lime-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-400 to-lime-400 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-medium">Total Citas</p>
                <p className="text-3xl font-bold">
                  {visibleAppointments.length + hiddenAppointments.length}
                </p>
              </div>
              <User className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {currentAppointments.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <Calendar className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">
                {showHidden
                  ? 'No hay citas ocultas.'
                  : 'No hay citas visibles.'}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {showHidden
                  ? 'Las citas ocultas aparecerán aquí'
                  : 'Las citas aparecerán aquí cuando se agenden'}
              </p>
            </div>
          ) : (
            currentAppointments.map((appt) => (
              <div
                key={appt.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
              >
                {isPastAppointmentRobust(appt.date, appt.time) && (
                  <div className="bg-red-100 text-red-700 px-4 py-2 rounded-t-2xl text-sm font-semibold border-b border-red-300">
                    ⚠️ Esta cita ya ha pasado
                  </div>
                )}

                <div className="p-6">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                    <div className="flex items-center gap-3 mb-3 lg:mb-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-lime-500 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {appt.client_name}
                        </h3>
                        <p className="text-gray-600 text-sm">{appt.service}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-100 to-cyan-200 px-4 py-2 rounded-full">
                        <Calendar className="h-4 w-4 text-cyan-600" />
                        <span className="text-cyan-700 font-medium text-sm">
                          {formatDate(appt.date)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 bg-gradient-to-r from-lime-100 to-lime-200 px-4 py-2 rounded-full">
                        <Clock className="h-4 w-4 text-lime-600" />
                        <span className="text-lime-700 font-medium text-sm">
                          {appt.time}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          showHidden
                            ? showAppointment(appt.id)
                            : hideAppointment(appt.id)
                        }
                        className={`flex items-center gap-2 font-semibold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-all duration-200 ${
                          showHidden
                            ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                            : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                        }`}
                      >
                        {showHidden ? <Eye size={16} /> : <EyeOff size={16} />}
                        {showHidden ? 'Mostrar' : 'Ocultar'}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Mail className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                          Email
                        </p>
                        <p className="text-sm font-medium text-gray-800">
                          {appt.client_email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CreditCard className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                          RUT
                        </p>
                        <p className="text-sm font-medium text-gray-800">
                          {appt.rut}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Phone className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                          Teléfono
                        </p>
                        <p className="text-sm font-medium text-gray-800">
                          {appt.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Briefcase className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">
                          Servicio
                        </p>
                        <p className="text-sm font-medium text-gray-800">
                          {appt.service}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-2 bg-gradient-to-r from-cyan-500 to-lime-500"></div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
