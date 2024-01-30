import React from 'react'

const Card = ({ title, description, path, svg }) => {
    return (
        <div className="sm:p-0">
            <a href={path} className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full ">
                <div className="p-6">
                    {svg}
                    <h5 className="mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {title}
                    </h5>
                    <p className="font-sans text-base font-light leading-relaxed text-inherit">
                        {description}
                    </p>
                </div>
            </a>
        </div>
    );
}

export default Card
