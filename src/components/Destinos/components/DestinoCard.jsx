import React from 'react';
// import './DestinoCard.css';

function DestinoCard({ destino }) {
  return (
    <div className="bg-[#fdf8f0] rounded-lg shadow-md overflow-hidden flex flex-col relative">
      <div className="h-48 bg-[#d4c6b6] flex justify-center items-center">
        {/* Aquí irá la imagen del destino */}
      </div>
      <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#c4a484] text-white">
        {destino.category}
      </span>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-[#6b5b51] mb-2">
          {destino.name}
        </h3>
        <p className="text-stone-700 text-sm mb-4">
          {destino.location}
        </p>
        <button className="btn-primary mt-auto">
          Ver Detalles
        </button>
      </div>
    </div>
  );
}

export default DestinoCard; 