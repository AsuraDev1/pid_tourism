import React from 'react';

function PopularDestinationsSection() {
  const destinations = [
    {
      name: 'Trinidad',
      description: 'Ciudad colonial con calles empedradas y casas coloridas',
      labelColor: 'bg-[#c4a484]',
      imageUrl: 'assets/photo_5012988160791129763_y.jpg',
      imageAlt: 'Calle empedrada en Trinidad con casas de colores'
    },
    {
      name: 'Santiago de Cuba',
      description: 'Cuna de la revolución y la música tradicional',
      labelColor: 'bg-[#c4a484]',
      imageUrl: 'assets/photo_5012988160791129762_y.jpg',
      imageAlt: 'Plaza principal de Santiago de Cuba por la noche'
    },
    {
      name: 'Cienfuegos',
      description: 'La Perla del Sur, conocida por su arquitectura neoclásica',
      labelColor: 'bg-[#c4a484]',
      imageUrl: 'assets/photo_5012988160791129761_y.jpg',
      imageAlt: 'Vista aérea de Cienfuegos con edificios coloridos'
    },
  ];

  return (
    <section className="w-4/5 mx-auto my-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#6b5b51] mb-4">Destinos Populares</h2>
        <p className="text-lg text-stone-700">Descubre los lugares más emblemáticos de Cuba</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div key={index} className="bg-[#fdf8f0] rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative h-48 bg-gray-300 flex items-center justify-center">
              {destination.imageUrl ? (
                <img
                  src={destination.imageUrl}
                  alt={destination.imageAlt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-600 text-sm">Imagen Placeholder</div>
              )}
              <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${destination.labelColor} text-white`}>
                {destination.name}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-[#6b5b51] mb-2">{destination.name}</h3>
              <p className="text-stone-700 text-sm mb-4 flex-grow">{destination.description}</p>
              <button className="btn-primary">
                Explorar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularDestinationsSection; 