import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-center lg:justify-start">
                    <div className="flex items-center justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to="/" className="flex items-center">
                                <span className="text-2xl font-bold text-[#2b2c34]">
                                    Opposer
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
