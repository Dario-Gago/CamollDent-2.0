import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const team = [
  {
    name: 'Dra. Estefania',
    specialty: 'Ortodoncia y Estética Dental',
    image: '/about/Dentist/estefania.png',
    description: 'Especialista en transformar sonrisas con técnicas avanzadas'
  },
  {
    name: 'Dra. Francisca',
    specialty: 'Rehabilitación Oral',
    image: '/about/Dentist/fran.png',
    description: 'Experta en devolverle funcionalidad a tu sonrisa'
  },
  {
    name: 'Dra. Gabriela',
    specialty: 'Odontopediatría',
    image: '/about/Dentist/gaby.png',
    description: 'Cuidando las sonrisas de los más pequeños'
  },
  {
    name: 'Dra. Javiera',
    specialty: 'Odontopediatría',
    image: '/about/Dentist/javi.png',
    description: 'Haciendo que los niños amen ir al dentista'
  },
  {
    name: 'Dra. Mariana',
    specialty: 'Odontopediatría',
    image: '/about/Dentist/Mariana.png',
    description: 'Creando experiencias positivas para toda la familia'
  }
]

const TeamSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
      spacing: 20
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 20 }
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 30 }
      }
    }
  })

  const ArrowLeft = ({ onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:bg-blue-50 hover:scale-110'
      }`}
    >
      <svg
        className={`w-6 h-6 transition-colors duration-300 ${
          disabled ? 'text-gray-400' : 'text-blue-600 group-hover:text-blue-700'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  )

  const ArrowRight = ({ onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:bg-blue-50 hover:scale-110'
      }`}
    >
      <svg
        className={`w-6 h-6 transition-colors duration-300 ${
          disabled ? 'text-gray-400' : 'text-blue-600 group-hover:text-blue-700'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  )

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#a7c527] rounded-full opacity-10 blur-xl"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header mejorado */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestro Equipo
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-[#a7c527] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionales apasionados por tu salud dental, comprometidos con
            brindarte la mejor atención y los resultados que mereces
          </p>
        </div>

        <div className="relative">
          {/* Botones de navegación */}
          <ArrowLeft
            onClick={() => instanceRef.current?.prev()}
            disabled={false}
          />
          <ArrowRight
            onClick={() => instanceRef.current?.next()}
            disabled={false}
          />

          <div ref={sliderRef} className="keen-slider">
            {team.map((dentist, index) => (
              <div key={index} className="keen-slider__slide group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                  {/* Elemento decorativo en la tarjeta */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-[#a7c527] rounded-full opacity-10 -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>

                  {/* Imagen con marco circular */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto relative">
                      <img
                        src={dentist.image}
                        alt={dentist.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-[#a7c527]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {dentist.name}
                    </h3>

                    <div className="inline-block bg-gradient-to-r from-blue-500 to-[#a7c527] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {dentist.specialty}
                    </div>

                    <p className="text-gray-600 text-base leading-relaxed mt-4">
                      {dentist.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSlider
