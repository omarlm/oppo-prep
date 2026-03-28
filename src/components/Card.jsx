import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Card = ({ title, description, path }) => {
    return (
        <Link
            to={path}
            className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md"
        >
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600">
                {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {description}
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600">
                Empezar test
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </Link>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export default Card
