import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="px-4 lg:px-8">
                    <div className="flex h-full items-center justify-start">
                        <div>
                            <Link to="/">
                                <img src="/opposer-logo-1.png" className="h-16" alt="Opposer Logo" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full h-1 bg-gradient-to-r from-vibrant-purple to-soft-peach"></div>
            </nav>
        </>
    )
}

export default Navbar
