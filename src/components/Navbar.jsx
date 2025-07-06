import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaTooth } from 'react-icons/fa'
import { MdOutlineMenu, MdClose } from 'react-icons/md'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const isActive = (path) => location.pathname === path

  const menuItems = [
    { path: '/', label: 'Inicio' },
    { path: '/services', label: 'Servicios' },
    { path: '/about', label: 'Nosotros' },
    { path: '/contact', label: 'Contacto' }
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo mejorado */}
          <Link
            to="/"
            className="flex items-center space-x-3 font-bold text-2xl text-[#51b7c7] group"
          >
            <div className="relative">
              <FaTooth className="text-3xl text-[#51b7c7] group-hover:text-[#a7c527] transition-all duration-300 drop-shadow-lg" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#a7c527] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="bg-gradient-to-r from-[#51b7c7] to-[#a7c527] bg-clip-text text-transparent">
              CamollDent
            </span>
          </Link>

          {/* Menú desktop */}
          <div className="hidden md:flex space-x-2 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-[#51b7c7] bg-blue-50 shadow-md'
                    : 'text-gray-600 hover:text-[#51b7c7] hover:bg-gray-50'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#51b7c7] to-[#a7c527] rounded-full"></div>
                )}
              </Link>
            ))}

            <Link
              to="/agend"
              className={`ml-4 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isActive('/agend')
                  ? 'bg-[#a7c527] text-white shadow-xl'
                  : 'bg-gradient-to-r from-[#51b7c7] to-[#4aa3b3] text-white hover:from-[#a7c527] hover:to-[#96b123]'
              }`}
            >
              Agendar Hora
            </Link>
          </div>

          {/* Botón hamburguesa mejorado */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="relative p-2 text-[#51b7c7] text-3xl hover:bg-gray-100 rounded-xl transition-all duration-300"
            >
              <div
                className={`transform transition-transform duration-300 ${
                  menuOpen ? 'rotate-180' : ''
                }`}
              >
                {menuOpen ? <MdClose /> : <MdOutlineMenu />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil mejorado */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 transition-all duration-300 ${
          menuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-6 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={toggleMenu}
              className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                isActive(item.path)
                  ? 'text-[#51b7c7] bg-blue-50 shadow-md transform scale-105'
                  : 'text-gray-700 hover:text-[#51b7c7] hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                {item.label}
                {isActive(item.path) && (
                  <div className="w-2 h-2 bg-[#51b7c7] rounded-full"></div>
                )}
              </div>
            </Link>
          ))}

          <Link
            to="/agend"
            onClick={toggleMenu}
            className={`block text-center py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
              isActive('/agend')
                ? 'bg-[#a7c527] text-white shadow-xl'
                : 'bg-gradient-to-r from-[#51b7c7] to-[#4aa3b3] text-white hover:from-[#a7c527] hover:to-[#96b123]'
            }`}
          >
            Agendar Hora
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
