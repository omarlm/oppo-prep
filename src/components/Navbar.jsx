import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="text-blue-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to="/">
                                <img
                                    className="size-24 w-auto lg:block"
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
    )
}

export default Navbar
