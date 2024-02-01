import React from 'react'
import { X } from 'lucide-react'

const Modal = ({ show, onClose, score, total }) => {
    if (!show) {
        return null
    }

    return (
        <div className="fixed inset-0 z-[1000] flex h-full w-full items-center justify-center overflow-auto px-4 font-[sans-serif] before:fixed before:inset-0 before:h-full before:w-full before:bg-[rgba(0,0,0,0.5)]">
            <div className="relative mx-auto w-full max-w-md rounded-md bg-white px-5 py-10 text-center shadow-lg">
                <button
                    type="button"
                    className="absolute right-4 top-4 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200"
                    onClick={onClose}
                >
                    <X className={'size-5'} />
                </button>

                <div className="mt-8">
                    <h3 className="flex-1 text-2xl font-semibold">
                        Tu puntuación
                    </h3>
                    <p className="mt-2 text-lg font-bold text-blue-600">
                        {score} / {total}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                        Comprueba tus respuestas. 😊
                    </p>
                    <button
                        type="button"
                        className="mt-8 w-full rounded border-none bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white outline-none hover:bg-blue-600"
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
