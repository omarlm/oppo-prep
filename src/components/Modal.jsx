import React from 'react'
import { X } from 'lucide-react'

const Modal = ({ show, onClose, score, total }) => {
    if (!show) {
        return null
    }

    return (
        <div className="fixed inset-0 px-4 flex justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-md bg-white shadow-lg rounded-md px-5 py-10 relative mx-auto text-center">
                <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    onClick={onClose}
                >
                    <X className={"size-5"} />
                </button>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold flex-1">Tu puntuación</h3>
                    <p className="text-lg font-bold text-blue-600 mt-2">{score} / {total}</p>
                    <p className="text-sm text-gray-500 mt-2">Comprueba tus respuestas. 😊</p>
                    <button type="button"
                        className="px-6 py-2.5 mt-8 w-full rounded text-white text-sm font-semibold border-none outline-none bg-blue-500 hover:bg-blue-600"
                        onClick={onClose}
                    >
                        Entendido
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Modal
