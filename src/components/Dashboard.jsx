import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../contexts/AuthContext'
import { LogOut } from 'lucide-react'

const Dashboard = () => {
  const { logout } = useContext(AuthContext)
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/appointments')
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error('Error al cargar citas:', err))
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 space-y-6 border border-blue-200">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">Citas Agendadas</h1>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow"
          >
            <LogOut size={20} />
            Salir
          </button>
        </div>

        <div className="space-y-4">
          {appointments.length === 0 ? (
            <p className="text-gray-500">No hay citas aún.</p>
          ) : (
            appointments.map((appt) => (
              <div
                key={appt.id}
                className="p-4 border rounded-lg shadow-sm bg-blue-50"
              >
                <p>
                  <strong>Cliente:</strong> {appt.client_name}
                </p>
                <p>
                  <strong>Email:</strong> {appt.client_email}
                </p>
                <p>
                  <strong>RUT:</strong> {appt.rut}
                </p>
                <p>
                  <strong>Teléfono:</strong> {appt.phone}
                </p>
                <p>
                  <strong>Servicio:</strong> {appt.service}
                </p>
                <p>
                  <strong>Fecha:</strong> {appt.date}
                </p>
                <p>
                  <strong>Hora:</strong> {appt.time}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
