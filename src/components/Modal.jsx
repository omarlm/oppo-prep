import PropTypes from 'prop-types'
import { X, Trophy } from 'lucide-react'

const Modal = ({ show, onClose, score, total }) => {
    if (!show) {
        return null
    }

    const percentage = Math.round((score / total) * 100)
    const isGood = percentage >= 70

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Resultado del test"
        >
            <div className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl">
                <div
                    className={`px-6 pb-2 pt-6 text-center ${isGood ? 'bg-emerald-50' : 'bg-slate-50'}`}
                >
                    <button
                        type="button"
                        className="absolute right-3 top-3 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600"
                        onClick={onClose}
                        aria-label="Cerrar"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <Trophy
                        className={`mx-auto h-10 w-10 ${isGood ? 'text-emerald-500' : 'text-slate-400'}`}
                    />
                    <p className="mt-3 text-sm font-medium text-slate-500">
                        Tu puntuación
                    </p>
                    <p className="mt-1 text-4xl font-bold text-slate-900">
                        {score}{' '}
                        <span className="text-lg font-normal text-slate-400">
                            / {total}
                        </span>
                    </p>
                    <p
                        className={`mt-1 text-sm font-semibold ${isGood ? 'text-emerald-600' : 'text-slate-500'}`}
                    >
                        {percentage}%
                    </p>
                </div>

                <div className="px-6 pb-6 pt-4 text-center">
                    <p className="text-sm text-slate-500">
                        Revisa tus respuestas para ver dónde puedes mejorar.
                    </p>
                    <button
                        type="button"
                        className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
                        onClick={onClose}
                    >
                        Ver respuestas
                    </button>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
}

export default Modal
