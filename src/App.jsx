import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'

import SpeechTherapy from './pages/SpeechTherapy'
import SocialWork from './pages/SocialWork'

// Importar las fuentes en el punto de entrada de tu aplicación
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '@fontsource/merriweather/400.css'
import '@fontsource/merriweather/700.css'

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen font-sans">
                <Navbar />
                <div className="flex-grow">
                    <div className="max-w-custom mx-auto p-4 sm:px-6 lg:px-8">
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                        <Card
                                            title="Logopedia"
                                            description="Preguntas actualizadas para las oposiciones de Logopedia del Gobierno de Canarias."
                                            path="/speech-therapy"
                                        />
                                        <Card
                                            title="Trabajador/a Social"
                                            description="Preguntas actualizadas para las oposiciones a Trabajador/a Social del Gobierno de Canarias"
                                            path="/social-work"
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
                </div>
                <Footer className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8" />
            </div>
        </Router>
    )
}

export default App
