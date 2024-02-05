import React from 'react'

const Card = ({ title, description, path, svg }) => {
    return (
        <div className="sm:p-0">
            <a
                href={path}
                className="relative flex w-full flex-col bg-soft-peach/40 bg-clip-border rounded-xl"
            >
                <div className="flex items-center p-4">
                    <div className="flex items-center justify-center rounded-full border-2 border-text bg-light-background p-4">
                        {svg}
                    </div>
                </div>
                <div className="ml-4 flex flex-col justify-center">
                    <h2 className="text-2xl font-oswald font-medium leading-snug tracking-normal text-dark">
                        {title}
                    </h2>
                </div>

                <div className="px-4 py-2">
                    <p className="text-sm text-dark font-nunito-sans">{description}</p>
                </div>
            </a>
        </div>
    )
}

export default Card
