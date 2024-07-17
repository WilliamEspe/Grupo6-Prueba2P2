import React, { useState } from 'react';
import './MainContent.css';

const ventajas = [
  "Mejora la coordinación mano-ojo.",
  "Aumenta la capacidad de resolver problemas.",
  "Fomenta la creatividad.",
  "Promueve el trabajo en equipo.",
  "Mejora la memoria y la atención.",
  "Ayuda a reducir el estrés.",
];

const getRandomVentaja = () => {
  const randomIndex = Math.floor(Math.random() * ventajas.length);
  return ventajas[randomIndex];
};

const MainContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ventaja, setVentaja] = useState('');

  const handleButtonClick = () => {
    setVentaja(getRandomVentaja());
    setIsModalOpen(true);
  };

  return (
    <main className="relative text-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/background.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen p-10">
        <h1 className="wow-title text-5xl font-extrabold mb-6" style={{ marginTop: '-10vh' }}>El Universo de los Videojuegos</h1>
        <p className="text-lg mb-6 text-white max-w-3xl mx-auto">
          En este espacio, exploraremos el fascinante mundo de los videojuegos. Los videojuegos son una forma de entretenimiento interactivo que combina tecnología, arte y narrativa para ofrecer experiencias inmersivas a jugadores de todas las edades. Desde aventuras épicas y simulaciones realistas hasta juegos de estrategia y rompecabezas desafiantes, los videojuegos han evolucionado hasta convertirse en una de las industrias de entretenimiento más influyentes del mundo. A continuación, te presentamos una selección de los juegos más jugados a nivel mundial. Estos juegos no solo han capturado la atención de millones de jugadores, sino que también han definido tendencias y establecido nuevos estándares en el diseño y la jugabilidad.
        </p>
        <button
          className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105"
          onClick={handleButtonClick}
        >
          Ver ventaja aleatorias de jugar videojuegos
        </button>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded max-w-lg mx-auto">
              <h2 className="text-2xl font-bold mb-4">Ventaja de Jugar Videojuegos</h2>
              <p className="text-justify">{ventaja}</p>
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => setIsModalOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;
