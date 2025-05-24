import React from 'react';

function FechasImportantesSection() {
  return (
    <section className="container mx-auto mt-8 p-4">
      <div className="bg-[#fdf8f0] p-6 rounded-lg shadow-md h-full">
        <h2 className="text-xl font-bold text-[#6b5b51] mb-4"><span className="mr-2">📅</span> Fechas Importantes</h2>
        <p className="text-sm text-stone-700 mb-4">Eventos y festivales que no te puedes perder</p>

        <div className="space-y-4">
          {/* Evento 1 */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <div>
              <h3 className="font-semibold text-[#6b5b51]">Festival del Habanero</h3>
              <p className="text-sm text-stone-600">Febrero 2026 - La Habana</p>
            </div>
            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Próximamente</span>
          </div>

          {/* Evento 2 */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <div>
              <h3 className="font-semibold text-[#6b5b51]">Carnaval de Santiago</h3>
              <p className="text-sm text-stone-600">Julio 2026 - Santiago de Cuba</p>
            </div>
            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Destacado</span>
          </div>

          {/* Evento 3 */}
          <div className="flex justify-between items-center pb-2">
            <div>
              <h3 className="font-semibold text-[#6b5b51]">Festival Internacional de Jazz</h3>
              <p className="text-sm text-stone-600">Enero 2026 - La Habana</p>
            </div>
            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Popular</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FechasImportantesSection; 