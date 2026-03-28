import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="no-print sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
                <div className="flex h-14 items-center">
                    <Link
                        to="/"
                        className="text-xl font-bold tracking-tight text-slate-900 transition-colors hover:text-indigo-600"
                    >
                        Opposer
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
