import React from 'react'

const Card = ({ title, description, path, svg }) => {
    return (
        <div className="sm:p-0">
            <a
                href={path}
                className="relative mt-6 flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md "
            >
                <div className="p-6">
                    {svg}
                    <h5 className="text-blue-gray-900 mb-2 font-sans text-xl font-semibold leading-snug tracking-normal">
                        {title}
                    </h5>
                    <p className="font-sans text-base font-light leading-relaxed text-inherit">
                        {description}
                    </p>
                </div>
            </a>
        </div>
    )
}

export default Card
