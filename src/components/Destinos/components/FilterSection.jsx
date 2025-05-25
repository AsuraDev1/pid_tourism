import React from 'react';
// import './FilterSection.css';

function FilterSection() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-[#6b5b51] mb-4">Filtrar Destinos</h2>
      <div className="flex justify-center gap-4 flex-wrap">
        <select className="p-2.5 rounded border border-[#d4c6b6] bg-[#fdf8f0] text-stone-700 text-base focus:outline-none focus:ring-2 focus:ring-[#6b5b51]">
          <option value="">Tipo de Cultura</option>
          {/* Opciones de Tipo de Cultura */}
        </select>
        <select className="p-2.5 rounded border border-[#d4c6b6] bg-[#fdf8f0] text-stone-700 text-base focus:outline-none focus:ring-2 focus:ring-[#6b5b51]">
          <option value="">Mes de Visita</option>
          {/* Opciones de Mes de Visita */}
        </select>
        <select className="p-2.5 rounded border border-[#d4c6b6] bg-[#fdf8f0] text-stone-700 text-base focus:outline-none focus:ring-2 focus:ring-[#6b5b51]">
          <option value="">Provincia</option>
          {/* Opciones de Provincia */}
        </select>
        <button className="btn-primary">
          Buscar
        </button>
      </div>
    </div>
  );
}

export default FilterSection; 