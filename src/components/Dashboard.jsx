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
  Briefcase
} from 'lucide-react'

const Dashboard = () => {
  const { logout } = useContext(AuthContext)
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/appointments')
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error('Error al cargar citas:', err))
  }, [])

  const formatDate = (dateString) => {
    // Eliminar la parte del timestamp y formatear para Chile (DD/MM/YYYY)
    const cleanDate = dateString.split('T')[0]
    const [year, month, day] = cleanDate.split('-')
    return `${day}/${month}/${year}`
  }
  const citasDeHoy = appointments.filter((appt) => {
    const apptDate = new Date(appt.date)
    const today = new Date()

    return (
      apptDate.getDate() === today.getDate() &&
      apptDate.getMonth() === today.getMonth() &&
      apptDate.getFullYear() === today.getFullYear()
    )
  })
  // Alternativa más robusta usando formato chileno
  // Versión más explícita que maneja diferentes formatos de fecha
  const isPastAppointmentRobust = (apptDateStr, apptTimeStr) => {
    try {
      let year, month, day

      // Detectar formato de fecha
      if (apptDateStr.includes('-')) {
        // Formato YYYY-MM-DD
        ;[year, month, day] = apptDateStr.split('-')
      } else if (apptDateStr.includes('/')) {
        // Formato DD/MM/YYYY (chileno)
        ;[day, month, year] = apptDateStr.split('/')
      } else {
        console.error('Formato de fecha no reconocido:', apptDateStr)
        return false
      }

      // Parsear tiempo
      const [hours, minutes] = apptTimeStr.split(':')

      // Crear objeto Date (month - 1 porque los meses en JS empiezan en 0)
      const appointmentDateTime = new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day),
        parseInt(hours),
        parseInt(minutes)
      )

      // Verificar si la fecha es válida
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-lime-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-gradient-to-r from-cyan-400 to-lime-400">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-lime-600 bg-clip-text text-transparent">
                  Citas Agendadas
                </h1>
                <p className="text-gray-600 mt-2">
                  Gestiona todas tus citas de manera eficiente
                </p>
              </div>
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-cyan-100 text-sm font-medium">Total Citas</p>
                <p className="text-3xl font-bold">{appointments.length}</p>
              </div>
              <Calendar className="h-12 w-12 text-cyan-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lime-100 text-sm font-medium">
                  Citas de Hoy
                </p>
                <p className="text-3xl font-bold">{citasDeHoy.length}</p>
              </div>
              <Clock className="h-12 w-12 text-lime-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-400 to-lime-400 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-medium">
                  Clientes Únicos
                </p>
                <p className="text-3xl font-bold">
                  {new Set(appointments.map((appt) => appt.client_email)).size}
                </p>
              </div>
              <User className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {appointments.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <Calendar className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">No hay citas aún.</p>
              <p className="text-gray-400 text-sm mt-2">
                Las citas aparecerán aquí cuando se agenden
              </p>
            </div>
          ) : (
            appointments.map((appt) => (
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
