import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Briefcase, Speech } from 'lucide-react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'

import SpeechTherapy from './pages/SpeechTherapy'
import SocialWork from './pages/SocialWork'

import '@fontsource/news-cycle';
import '@fontsource-variable/oswald';
import '@fontsource-variable/nunito-sans';

function App() {
    return (
        <Router>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="container mx-auto max-w-3xl flex-1 p-4">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <div className="space-y-4">
                                    <Card
                                        title="Logopedia"
                                        description="Preguntas actualizadas para las oposiciones de Logopedia del Gobierno de Canarias."
                                        path="/speech-therapy"
                                        svg={<Speech size={30} stroke='#A848C1' />}
                                    />
                                    <Card
                                        title="Trabajador/a Social"
                                        description="Preguntas actualizadas para las oposiciones a Trabajador/a Social del Gobierno de Canarias"
                                        path="/social-work"
                                        svg={<Briefcase size={30} stroke='#A848C1' />}
                                    />
                                </div>
                            }
                        />
                        <Route
                            path="/speech-therapy"
                            element={<SpeechTherapy />}
                        />
                        <Route path="/social-work" element={<SocialWork />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App
