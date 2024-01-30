import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Briefcase, Speech } from 'lucide-react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';

import SpeechTherapy from './pages/SpeechTherapy';
import SocialWork from './pages/SocialWork';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto flex-1 max-w-3xl p-4">
          <h1 className='text-4xl font-bold'>Preguntas para oposiciones del Gobierno de Canarias</h1>
          <Routes>
            <Route exact path="/" element={
              <div className="space-y-4">
                <Card
                  title="Logopedia"
                  description="Preguntas actualizadas para oposiciones de Logopedia del Gobierno de Canarias."
                  path="/speech-therapy"
                  svg={<Speech />} />
                <Card
                  title="Trabajador/a Social"
                  description="Preguntas recientes para aspirantes a Trabajo Social en las oposiciones del Gobierno de Canarias."
                  path="/social-work"
                  svg={<Briefcase />} />
              </div>
            } />
            <Route path="/speech-therapy" element={<SpeechTherapy />} />
            <Route path="/social-work" element={<SocialWork />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
