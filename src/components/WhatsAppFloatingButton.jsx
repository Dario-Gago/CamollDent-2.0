import React, { useState } from 'react'
import { MessageCircle, Phone, X } from 'lucide-react'

const WhatsAppFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Configura aquí los números de teléfono (con código de país, sin espacios ni símbolos)
  const phoneNumbers = [
    {
      id: 1,
      name: 'Ñuñoa',
      number: '56962130282', // Ejemplo número chileno
      message: 'Hola, me interesa obtener más información sobre sus productos'
    },
    {
      id: 2,
      name: 'Peñalolen',
      number: '56987654321', // Ejemplo número chileno
      message: 'Hola, necesito ayuda con soporte técnico'
    }
  ]

  const openWhatsApp = (number, message) => {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Opciones del menú */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg border border-gray-200 p-2 min-w-48 animate-in slide-in-from-bottom-2">
          <div className="text-sm font-medium text-gray-700 px-3 py-2 border-b border-gray-100">
            Contactar por WhatsApp
          </div>
          {phoneNumbers.map((phone) => (
            <button
              key={phone.id}
              onClick={() => openWhatsApp(phone.number, phone.message)}
              className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors"
            >
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-700">{phone.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Botón principal */}
      <button
        onClick={toggleMenu}
        className={`
          w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center
          ${
            isOpen
              ? 'bg-red-500 hover:bg-red-600 rotate-180'
              : 'bg-green-500 hover:bg-green-600 hover:scale-110'
          }
        `}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  )
}

export default WhatsAppFloatingButton
