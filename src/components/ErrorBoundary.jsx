import { Component } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
                    <p className="text-lg font-semibold text-red-600">
                        Algo salió mal
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                        No se pudieron cargar las preguntas. Inténtalo de
                        nuevo.
                    </p>
                    <button
                        type="button"
                        className="mt-4 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
                        onClick={() => window.location.reload()}
                    >
                        Recargar
                    </button>
                </div>
            )
        }
        return this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ErrorBoundary
