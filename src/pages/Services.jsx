import React from 'react'

const services = [
  {
    title: 'Ortodoncia',
    description:
      'Corrección de la posición de los dientes y la mandíbula para mejorar la estética y funcionalidad.',
    icon: (
      <svg
        className="w-12 h-12 text-[#51b7c7]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 12l4 4L20 4" />
      </svg>
    )
  },
  {
    title: 'Odontopediatría',
    description:
      'Atención especializada para la salud bucal de los niños y adolescentes.',
    icon: (
      <svg
        className="w-12 h-12 text-[#51b7c7]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 0" />
      </svg>
    )
  },
  {
    title: 'Rehabilitación Oral',
    description:
      'Restauramos la función y estética dental con prótesis y tratamientos personalizados.',
    icon: (
      <svg
        className="w-12 h-12 text-[#51b7c7]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2v20M2 12h20" />
      </svg>
    )
  },
  {
    title: 'Blanqueamiento Dental',
    description:
      'Tratamientos seguros para lograr una sonrisa más blanca y radiante.',
    icon: (
      <svg
        className="w-12 h-12 text-[#51b7c7]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 3v18M3 12h18" />
      </svg>
    )
  }
]

const Services = () => {
  return (
    <section className="bg-white py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#217480]">
          Nuestros Servicios
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          En CamollDent, ofrecemos una amplia gama de servicios dentales para
          cuidar tu salud bucal con la mejor tecnología y un equipo profesional.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map(({ title, description, icon }, idx) => (
          <div
            key={idx}
            className="p-6 bg-[#e7f8fb] rounded-2xl shadow-md hover:shadow-lg transition cursor-default"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-[#51b7c7] mb-2">
              {title}
            </h3>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
