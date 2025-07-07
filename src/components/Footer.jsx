import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#51b7c7] to-[#a7c527] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo/Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">CamollDent</h3>
            <p className="text-white/90 mb-4">
              Cuidando tu sonrisa con tecnología avanzada y un equipo de
              expertos.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">
                  <a
                    href="https://www.instagram.com/nunoa.dental/"
                    target="_blank"
                  >
                    i
                  </a>
                </span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">
                  <a
                    href="https://www.facebook.com/profile.php?id=100064991743718"
                    target="_blank"
                  >
                    f
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Limpieza Dental
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Ortodoncia
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Implantes Dentales
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Blanqueamiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Clínica Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">La Clínica</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Nuestro Equipo
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Citas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs">📍</span>
                </div>
                <span className="text-white/90 text-sm">Azapa 1403</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs">📞</span>
                </div>
                <span className="text-white/90 text-sm">+56 9 8765 4321</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs">✉️</span>
                </div>
                <span className="text-white/90 text-sm">
                  info@nunoadental.cl
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs">⏰</span>
                </div>
                <span className="text-white/90 text-sm">
                  Lunes a Viernes: 9:00 - 19:00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/90 text-sm mb-4 md:mb-0">
            © 2024 CamollDent. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="#"
              className="text-white/90 hover:text-white transition-colors"
            >
              Política de Privacidad
            </Link>
            <a
              href="#"
              className="text-white/90 hover:text-white transition-colors"
            >
              Términos de Uso
            </a>
            <Link
              to="/ocult"
              className="text-white/90 hover:text-white transition-colors"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
