import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="text-blue-500">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/">
                                <img
                                    className="lg:block size-24 w-auto"
                                    src="./oppo-prep-logo.png"
                                    alt="Your Logo"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-300/100"></div>
        </nav>
    );
};

export default Navbar
