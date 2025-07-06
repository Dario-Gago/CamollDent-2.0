import React from 'react'
import TeamSlider from '../components/TeamSlider'

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#51b7c7] rounded-full opacity-10 blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#a7c527] rounded-full opacity-10 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagen con efectos */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#51b7c7] to-[#a7c527] rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative">
                <img
                  src="public/about/logo.png"
                  alt="CamollDent Clínica Dental"
                  className="rounded-3xl shadow-2xl w-full transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#51b7c7] to-[#a7c527] rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido principal */}
            <div className="space-y-8" id="sobre">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                  Sobre{' '}
                  <span className="bg-gradient-to-r from-[#51b7c7] to-[#a7c527] bg-clip-text text-transparent">
                    CamollDent
                  </span>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[#51b7c7] to-[#a7c527] rounded-full"></div>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                En <span className="font-bold text-[#51b7c7]">CamollDent</span>{' '}
                nos apasiona cuidar tu sonrisa. Somos una clínica dental moderna
                y acogedora, comprometida con ofrecer atención personalizada y
                tratamientos de alta calidad para toda la familia.
              </p>

              {/* Estadísticas */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#51b7c7] mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">Pacientes Felices</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#a7c527] mb-2">
                    5+
                  </div>
                  <div className="text-sm text-gray-600">
                    Años de Experiencia
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#51b7c7] mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">
                    Servicios Especializados
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce los principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#51b7c7] to-[#a7c527] rounded-full opacity-10 -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#51b7c7] to-[#4aa3b3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#51b7c7] transition-colors duration-300">
                    Nuestra Misión
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    Brindar servicios odontológicos con excelencia, ética y
                    calidez humana, enfocándonos en la prevención y el bienestar
                    integral de nuestros pacientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Visión */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#a7c527] to-[#96b123] rounded-full opacity-10 -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#a7c527] to-[#96b123] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#a7c527] transition-colors duration-300">
                    Nuestra Visión
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    Ser reconocidos como una clínica líder en salud bucal,
                    destacando por nuestra innovación, trato cercano y
                    resultados duraderos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores adicionales */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#51b7c7] to-[#a7c527] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Calidad</h4>
              <p className="text-gray-600">
                Estándares de excelencia en cada tratamiento
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#a7c527] to-[#51b7c7] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Cuidado</h4>
              <p className="text-gray-600">Atención personalizada y empática</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#51b7c7] to-[#a7c527] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Innovación
              </h4>
              <p className="text-gray-600">
                Tecnología avanzada y técnicas modernas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Slider */}
      <TeamSlider />
    </div>
  )
}

export default About
