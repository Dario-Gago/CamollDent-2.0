import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="bg-gradient-to-b from-[#e7f8fb] to-white">
      {/* Hero */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-16">
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#217480] leading-tight">
            Sonríe con confianza
            <br />
            en <span className="text-[#51b7c7]">CamollDent</span>
          </h1>
          <p className="text-lg text-gray-700">
            Cuidamos tu salud bucal con tecnología avanzada y un equipo humano
            que te hace sentir en casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/agend"
              className="bg-[#51b7c7] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-[#a7c527] transition"
            >
              Agenda tu cita
            </Link>
            <Link
              to="/about"
              className="border border-[#51b7c7] text-[#51b7c7] px-6 py-3 rounded-lg hover:bg-[#def3f6] transition"
            >
              Conócenos
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="public/home/Clinica.jpg"
            alt="Clínica CamollDent"
            className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Sección destacada */}
      {/* Sección destacada */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              ¿Por qué elegir nuestra clínica?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nos comprometemos a brindarte la mejor experiencia dental con un
              enfoque humano y profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#a7c527] to-[#8fa922] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.85 3.5 14.7 3.5 14.55 3.5L12 5L9.45 3.5C9.3 3.5 9.15 3.5 9 3.5L3 7V9H21M9 12C6.24 12 4 14.24 4 17V22H6V17C6 15.34 7.34 14 9 14S12 15.34 12 17V22H14V17C14 14.24 11.76 12 9 12M15 12C12.24 12 10 14.24 10 17V22H12V17C12 15.34 13.34 14 15 14S18 15.34 18 17V22H20V17C20 14.24 17.76 12 15 12Z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#a7c527] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#a7c527] transition-colors">
                Atención personalizada
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nos tomamos el tiempo para escuchar tus necesidades y crear un
                plan de tratamiento único para ti.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#a7c527] to-[#8fa922] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#a7c527] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#a7c527] transition-colors">
                Tecnología de punta
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Usamos equipos modernos y seguros para cada tratamiento,
                garantizando resultados excepcionales.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#a7c527] to-[#8fa922] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#a7c527] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#a7c527] transition-colors">
                Ambiente acogedor
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Queremos que vengas sin miedo y te vayas feliz. Creamos un
                espacio cálido y relajante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Llamado a la acción final */}
      <section className="bg-[#def3f6] py-16 px-6 sm:px-10 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#217480] mb-4">
          ¿Listo para transformar tu sonrisa?
        </h2>
        <p className="text-gray-700 mb-8">
          Agenda tu evaluación inicial y da el primer paso hacia una sonrisa
          saludable y hermosa.
        </p>
        <Link
          to="/agend"
          className="inline-block bg-[#a7c527] text-white px-8 py-3 rounded-full text-lg hover:bg-[#51b7c7] transition"
        >
          Reservar ahora
        </Link>
      </section>
    </main>
  )
}

export default Home
