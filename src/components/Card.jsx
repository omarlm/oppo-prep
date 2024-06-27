import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ title, description, path }) => {
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md m-4">
            <div className="block mb-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center font-serif">
                    {title}
                </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 font-sans">
                {description}
            </p>
            <Link to={path} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-sans">
                Empezar test
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}

export default Card
