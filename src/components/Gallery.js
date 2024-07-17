import React, { useState } from 'react';

const games = [
    { id: 1, title: 'LEAGUE OF LEGENDS', description: 'League of Legends, lanzado en 2009 por Riot Games, ha sabido mantenerse en la cresta de la ola durante más de década y media por algo. Su éxito se debe a detalles como la continua actualización de contenido, la incorporación de nuevos campeones y eventos y a su sólido ecosistema de esports. Este trabajo de renovación continua, algo en común con muchos de los videojuegos que comentaremos a continuación, constituye una auténtica oportunidad laboral para nuestros estudiantes del Doble Postgrado en Concept Art y Diseño de personajes.', image: 'lol.jpg' },
    { id: 2, title: 'Dota 2', description: 'Dota 2, desarrollado por Valve y lanzado en 2013, es otro gigante del género MOBA. Este título está entre los videojuegos más jugados del género por su complejidad y profundidad estratégica, lo que lo hace muy atractivo para los jugadores que buscan un desafío constante. El éxito de Dota 2 también se ve reflejado en su escena competitiva, con The International siendo uno de los torneos de esports más prestigiosos y con mayores premios en efectivo. Por supuesto, Valve continúa actualizando el juego de forma regular, manteniendo a la comunidad activa y fiel.', image: 'dota-2.jpg' },
    { id: 3, title: 'MINECRAFT', description: 'Minecraft, lanzado por Mojang en 2011, sigue siendo uno de los videojuegos más jugados gracias a su infinita creatividad y simplicidad. Este juego de mundo abierto permite a los gamers explorar, construir y sobrevivir en un entorno en el que pueden dar rienda suelta a su creatividad. Su éxito reside en la libertad que ofrece a los jugadores a la hora de crear sus propios mundos y aventuras, además de en las constantes actualizaciones, que han permitido que Minecraft haya trascendido generaciones. Estos no solo son los videojuegos más jugados, sino que se trata de algunos de los mejores ejemplos para quienes quieren dedicarse al mundo del videojuego a nivel profesional, ¡ya sea jugando o participando de forma activa en la creación de nuevos conceptos y aventuras!', image: 'Minecraft.jpg' },
    { id: 4, title: 'VALORANT', description: 'Valorant, lanzado por Riot Games en 2020, ha sabido hacerse con la atención del mundo gaming gracias a su combinación de mecánicas de disparo precisas y habilidades únicas de los personajes. Esto ha permitido que el juego destaque sobre sus principales competidores, atrayendo a jugadores que buscan tanto habilidad como estrategia en sus partidas. ¡Un buen suplemento al típico mata-mata!', image: 'Valorant.jpg' },
    { id: 5, title: 'COUNTER STRIKE 2', description: 'Counter-Strike 2, lanzado por Valve en 2023, es la evolución de uno de los FPS (First Person Shooter) más icónicos de la historia. Su éxito se basa en la perfección de su jugabilidad, la introducción de mejoras gráficas y la integración de sistemas innovadores como las granadas de humo interactivas. Con una comunidad leal y un competitivo ecosistema de esports, Counter-Strike 2 ha sabido mantener y expandir el espíritu de CS:GO, consolidándose como un robusto pilar en el género de los shooters.', image: 'counter-strike.jpg' },
    { id: 6, title: 'FORNITE', description: 'Fortnite, desarrollado por Epic Games y lanzado en 2017, ha sido el mayor fenómeno a nivel mundial dentro del género Battle Royale. Su éxito radica en su combinación de construcción y combate, así como en su modelo de juego gratuito con compras dentro del propio juego, como es el caso de los cosméticos. Fortnite destaca por sus eventos en vivo y colaboraciones con diferentes franquicias, como Star Wars o Marvel, así como con famosos de otros ámbitos. Tras casi una década en activo, este título cuenta con una base de 230 millones de jugadores mensuales, ¡algo debe estar haciendo muy bien!', image: 'Fornite.jpg' },
];

const Gallery = () => {
    const [selectedGame, setSelectedGame] = useState(null);

    return (
        <section id="gallery" className="p-10 flex-grow bg-cover bg-center relative" style={{ backgroundImage: `url('/fondoGaleria.jpg')` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Galería</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {games.map(game => (
                        <div
                            key={game.id}
                            className="card cursor-pointer bg-white flex flex-col justify-between"
                            onClick={() => setSelectedGame(game)}
                        >
                            <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{game.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedGame && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-5 rounded max-w-lg mx-auto">
                            <h2 className="text-2xl font-bold mb-4">{selectedGame.title}</h2>
                            <p className="text-justify">{selectedGame.description}</p>
                            <button
                                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                                onClick={() => setSelectedGame(null)}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
