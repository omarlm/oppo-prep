import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="w-full border-b-2 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Opposer
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
