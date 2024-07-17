import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => (
  <div className="bg-cover bg-center min-h-screen relative" style={{ backgroundImage: `url('/fondoPrincipal.jpg')` }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 min-h-screen flex flex-col">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  </div>
);

export default App;
