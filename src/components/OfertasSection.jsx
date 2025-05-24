import React from 'react';

function OfertasSection() {
  return (
    <section className="container mx-auto mt-8 p-4">
      <div className="bg-[#fdf8f0] p-6 rounded-lg shadow-md h-full">
        <h2 className="text-xl font-bold text-[#6b5b51] mb-4"><span className="mr-2">✈️</span> Viajes en Oferta</h2>
        <p className="text-sm text-stone-700 mb-4">Aprovecha nuestras mejores ofertas</p>
        
        <div className="space-y-4">
          {/* Oferta 1 */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <div>
              <h3 className="font-semibold text-[#6b5b51]">La Habana - 4 noches</h3>
              <p className="text-sm text-stone-600">Hotel + Vuelo incluido</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-stone-600 line-through">$899</p>
              <p className="text-lg font-bold text-[#c4a484]">$699</p>
            </div>
          </div>

          {/* Oferta 2 */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2">
            <div>
              <h3 className="font-semibold text-[#6b5b51]">Varadero - 7 noches</h3>
              <p className="text-sm text-stone-600">Todo incluido</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-stone-600 line-through">$1299</p>
              <p className="text-lg font-bold text-[#c4a484]">$999</p>
            </div>
          </div>

          {/* Oferta 3 */}
          <div className="flex justify-between items-center pb-2">
            <div>
              <h3 className="font-semibold text-[#6b5b51]">Cayo Coco - 5 noches</h3>
              <p className="text-sm text-stone-600">Resort de lujo</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-stone-600 line-through">$1499</p>
              <p className="text-lg font-bold text-[#c4a484]">$1199</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfertasSection; 