import React from 'react';


function Footer() {
  return (
    <footer className="bg-[#d4c6b6] text-stone-700 p-8">
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold text-[#6b5b51] mb-4">CubaTravel</h3>
          <p className="text-sm">Tu portal para descubrir la belleza y la cultura de Cuba. Ofrecemos experiencias auténticas y memorables.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#6b5b51] mb-4 text-center">Redes Sociales</h3>
          <div className="grid grid-cols-2 gap-4 place-items-center w-fit mx-auto">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="assets/facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="assets/social-media.png" alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="assets/instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="assets/youtube.png" alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#6b5b51] mb-4">Enlaces</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:underline">Política de Privacidad</a></li>
            <li><a href="#" className="text-sm hover:underline">Términos y Condiciones</a></li>
            <li><a href="#" className="text-sm hover:underline">FAQs</a></li>
            <li><a href="#" className="text-sm hover:underline">Sobre Nosotros</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#6b5b51] mb-4">Contáctenos</h3>
          <p className="text-sm mb-2">✉️ info@cubatravel.com</p>
          <p className="text-sm">📞 +53 7 123 4567</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-stone-600">
        CubaTravel © 2025 Todos los derechos reservados
      </div>
    </footer>
  );
}

export default Footer; 