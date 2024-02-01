import React from 'react'

const Card = ({ title, description, path, svg }) => {
    return (
        <div className="sm:p-0">
            <a
                href={path}
                className="relative flex w-full flex-col bg-[#d1d1e9] bg-clip-border"
            >
                <div className="flex items-center p-4">
                    <div className="flex items-center justify-center rounded border-2 border-[#2b2c34] bg-[#fffffe] p-4">
                        {svg}
                    </div>
                    <div className="ml-4 flex flex-col justify-center">
                        <h2 className="text-2xl font-medium leading-snug tracking-normal text-[#2b2c34]">
                            {title}
                        </h2>
                    </div>
                </div>

                <div className="px-4 py-2">
                    <p className="text-sm !text-[#2b2c34]">{description}</p>
                </div>
            </a>
        </div>
    )
}

export default Card
