import { useState } from 'react'
import './App.css'
import Header from './components/header'
import OfertasSection from './components/OfertasSection'
import FechasImportantesSection from './components/FechasImportantesSection'
import ImageCarousel from './components/ImageCarousel'
import PopularDestinationsSection from './components/PopularDestinationsSection'
import UniqueExperiencesSection from './components/UniqueExperiencesSection'
import Footer from './components/Footer'

function App() {
  const scrollToDestinos = (e) => {
    e.preventDefault();
    const destinosSection = document.getElementById('destinos-populares');
    destinosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const carouselImages = [
    {
      url: "assets/photo_5012988160791129764_y.jpg",
      alt: "Personas en una feria del libro",
      title: "Cultura Cubana",
      caption: "Explora la rica cultura literaria de Cuba en sus ferias y eventos."
    },
    {
      url: "assets/photo_5012988160791129765_y.jpg",
      alt: "Niños y adultos mirando libros en un puesto al aire libre",
      title: "Lectura al Aire Libre",
      caption: "Disfruta de la lectura bajo el sol cubano en espacios abiertos dedicados a los libros."
    },
    {
      url: "assets/photo_5012988160791129766_x.jpg",
      alt: "Grupo de bailarines en trajes elaborados durante el Carnaval de Santiago",
      title: "Ritmo de Carnaval",
      caption: "Vive la pasión y el color del famoso Carnaval de Santiago de Cuba."
    },
    {
      url: "assets/photo_5012988160791129767_x.jpg",
      alt: "Dos personas con equipo de snorkel sentadas junto a un cenote o río",
      title: "Aventura Submarina",
      caption: "Sumérgete en las cristalinas aguas cubanas y descubre su vida marina."
    },
    {
      url: "assets/photo_5012988160791129768_x.jpg",
      alt: "Casa roja a la orilla de un lago con paisaje montañoso al fondo",
      title: "Paisajes de Ensueño",
      caption: "Relájate en la tranquilidad de los paisajes rurales de Cuba."
    },
    {
      url: "assets/photo_5012988160791129769_y.jpg",
      alt: "Comparsa y músicos en un desfile de carnaval nocturno",
      title: "Noche de Fiesta",
      caption: "La música y el baile toman las calles durante las celebraciones cubanas."
    },
    {
      url: "assets/photo_5012988160791129770_m.jpg",
      alt: "Un estanque en un jardín botánico con un pabellón",
      title: "Naturaleza Exuberante",
      caption: "Explora la flora y fauna únicas en los jardines botánicos de Cuba."
    },
    {
      url: "assets/photo_5012988160791129771_m.jpg",
      alt: "Mural colorido pintado en una formación rocosa natural",
      title: "Arte en la Naturaleza",
      caption: "Admira las impresionantes obras de arte integradas en el paisaje cubano."
    }
  ];

  return (
    <>
      <Header />
      <main className="relative w-4/5 mx-auto h-auto min-h-[500px] flex items-center mt-8">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="assets\photo_5012988160791129772_y.jpg"
            alt="El Capitolio en La Habana con coches clásicos"
            className="w-[120%] h-full object-cover object-left rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8b7b71]/95 via-[#8b7b71]/40 to-transparent rounded-lg"></div>
        </div>
        <div className="relative w-full flex flex-col md:flex-row items-center p-6">
          <div className="md:w-1/2 text-left pr-12">
            <h1 className="text-6xl font-bold text-white leading-tight mb-6">Cubatravel: Cuba te espera con su rica historia y su encanto único</h1>
            <p className="text-lg text-white/90 mb-10">Descubre las maravillas de Cuba, desde sus playas de arena blanca hasta sus ciudades coloniales llenas de música y cultura.</p>
            <div className="flex space-x-6">
              <a href="#destinos-populares" onClick={scrollToDestinos} className="btn-primary">Explorar Destinos</a>
              <button className="btn-primary">Reservar Ahora</button>
            </div>
          </div>
        </div>
      </main>

      <div className="w-4/5 mx-auto flex flex-col md:flex-row mt-4 p-4 gap-8">
        <div className="md:w-1/2">
          <OfertasSection />
        </div>
        <div className="md:w-1/2">
          <FechasImportantesSection />
        </div>
      </div>

      <div className="w-4/5 mx-auto mt-8 mb-16">
        <h2 className="text-3xl font-bold text-[#6b5b51] text-center mb-8">Descubre Cuba</h2>
        <ImageCarousel images={carouselImages} />
      </div>

      <div id="destinos-populares">
        <PopularDestinationsSection />
      </div>

      <UniqueExperiencesSection />

      <Footer />
    </>
  )
}

export default App
