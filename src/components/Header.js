import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="flex justify-between items-center p-5 bg-gray-800 text-white">
        <div className="logo text-2xl font-bold">
            <img src="/logo.webp" alt="Logo" className="inline-block h-8 mr-2" />
            Juegoteca
        </div>
        <nav>
            <ul className="flex space-x-4">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/gallery">Galería</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
