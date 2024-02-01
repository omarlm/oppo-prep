import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-[#d1d1e9]">
                <div className="flex h-full items-center justify-center px-4 py-6 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-md text-center">
                        <p className="text-sm text-[#2b2c34]">
                            Hecho con ❤️. Desarrollado en{' '}
                            <a
                                href="https://react.dev/"
                                className="font-bold text-[#6246ea] hover:underline"
                            >
                                React{' '}
                            </a>
                            con{' '}
                            <a
                                href="https://tailwindcss.com/"
                                className="font-bold text-[#6246ea] hover:underline"
                            >
                                TailwindCSS
                            </a>
                            . Codificado en{' '}
                            <a
                                href="https://code.visualstudio.com/"
                                className="font-bold text-[#6246ea] hover:underline"
                            >
                                Visual Studio Code{' '}
                            </a>
                            y desplegado en{' '}
                            <a
                                href="https://www.netlify.com/"
                                className="font-bold text-[#6246ea] hover:underline"
                            >
                                Netlify.
                            </a>
                            Podrás encontrar el código en el repositorio de{' '}
                            <a
                                href="https://github.com/omarlm/oppo-prep"
                                className="font-bold text-[#6246ea] hover:underline"
                            >
                                GitHub.
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
