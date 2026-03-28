const Footer = () => {
    return (
        <footer className="no-print border-t border-slate-200 py-4">
            <p className="text-center text-xs text-slate-400">
                Desarrollado con{' '}
                <a
                    href="https://react.dev/"
                    className="font-medium text-slate-500 hover:text-indigo-600"
                >
                    React
                </a>{' '}
                y{' '}
                <a
                    href="https://tailwindcss.com/"
                    className="font-medium text-slate-500 hover:text-indigo-600"
                >
                    TailwindCSS
                </a>
                . Código en{' '}
                <a
                    href="https://github.com/omarlm/oppo-prep"
                    className="font-medium text-slate-500 hover:text-indigo-600"
                >
                    GitHub
                </a>
            </p>
        </footer>
    )
}

export default Footer
