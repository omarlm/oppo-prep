import PropTypes from 'prop-types'

const Footer = ({ className }) => {
    return (
        <footer className={`text-xs py-4 ${className}`}>
            <div className="text-center font-sans">
                <p>
                    Desarrollado en{' '}
                    <a
                        href="https://react.dev/"
                        className="text-blue-400 hover:text-blue-600 font-bold"
                    >
                        React{' '}
                    </a>
                    con{' '}
                    <a
                        href="https://tailwindcss.com/"
                        className="text-blue-400 hover:text-blue-600 font-bold"
                    >
                        TailwindCSS
                    </a>
                    . Codificado en{' '}
                    <a
                        href="https://www.jetbrains.com/webstorm/"
                        className="text-blue-400 hover:text-blue-600 font-bold"
                    >
                        WebStorm{' '}
                    </a>
                    y desplegado en{' '}
                    <a
                        href="https://www.netlify.com/"
                        className="text-blue-400 hover:text-blue-600 font-bold"
                    >
                        Netlify.{' '}
                    </a>
                    Podrás encontrar el código en el repositorio de{' '}
                    <a
                        href="https://github.com/omarlm/oppo-prep"
                        className="text-blue-400 hover:text-blue-600 font-bold"
                    >
                        GitHub.
                    </a>
                </p>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    className: PropTypes.string,
}

export default Footer
