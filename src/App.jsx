import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import ExamPage from './pages/ExamPage'
import ErrorBoundary from './components/ErrorBoundary'
import categories from './config/categories'

import '@fontsource-variable/inter'

function App() {
    return (
        <Router>
            <div className="flex min-h-screen flex-col font-sans">
                <Navbar />
                <div className="flex-grow">
                    <div className="mx-auto max-w-content px-4 py-6 sm:px-6 lg:px-8">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <div>
                                        <div className="mb-8 text-center">
                                            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                                                Elige tu oposición
                                            </h2>
                                            <p className="mt-2 text-slate-500">
                                                Selecciona una categoría para
                                                empezar a practicar
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                            {categories.map((cat) => (
                                                <Card
                                                    key={cat.id}
                                                    title={cat.title}
                                                    description={
                                                        cat.description
                                                    }
                                                    path={`/${cat.id}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                }
                            />
                            <Route
                                path="/:categoryId"
                                element={
                                    <ErrorBoundary>
                                        <ExamPage />
                                    </ErrorBoundary>
                                }
                            />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App
