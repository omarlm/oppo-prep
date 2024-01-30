import React from 'react'

const Footer = () => {

    return (
        <>
            <footer className="bg-white">
                <div className="flex justify-center items-center h-full py-6 px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-md mx-auto">
                        <p className="text-sm text-gray-500">
                            Hecho con ❤️. Desarrollado en <a href='https://react.dev/' className="font-bold hover:underline">React</a> con <a href='https://tailwindcss.com/' className="font-bold hover:underline">TailwindCSS</a>.
                            Codificado en <a href='https://code.visualstudio.com/' className="font-bold hover:underline">Visual Studio Code</a> y desplegado en <a href='https://www.netlify.com/' className="font-bold hover:underline">Netlify</a>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer