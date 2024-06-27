import PropTypes from 'prop-types'
import { X } from 'lucide-react'

const Modal = ({ show, onClose, score, total }) => {
    if (!show) {
        return null
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-auto">
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="text-center mt-2">
                    <h3 className="text-lg font-semibold mb-4">
                        Tu puntuación ha sido de:
                    </h3>
                    <p className="text-2xl font-bold mb-4">
                        {score} / {total}
                    </p>
                    <p className="mb-4">
                        No olvides de comprobar tus respuestas una vez que{' '}
                        <span className="font-semibold">cierres</span> la ventana. 😊
                    </p>
                    <button
                        type="button"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                        onClick={onClose}
                    >
                        Entendido
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
