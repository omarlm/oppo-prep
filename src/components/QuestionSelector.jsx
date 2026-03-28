import PropTypes from 'prop-types'
import { ListOrdered } from 'lucide-react'

const QuestionSelector = ({ numQuestions, onNumQuestionsChange }) => {
    return (
        <div className="flex items-center gap-2">
            <ListOrdered className="h-4 w-4 text-slate-400" />
            <select
                id="numQuestions"
                value={numQuestions}
                onChange={(e) => onNumQuestionsChange(Number(e.target.value))}
                className="rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm text-slate-700 focus:border-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-300"
                aria-label="Número de preguntas"
            >
                <option value={5}>5 preguntas</option>
                <option value={10}>10 preguntas</option>
                <option value={15}>15 preguntas</option>
                <option value={20}>20 preguntas</option>
                <option value={50}>50 preguntas</option>
                <option value={100}>100 preguntas</option>
            </select>
        </div>
    )
}

QuestionSelector.propTypes = {
    numQuestions: PropTypes.number.isRequired,
    onNumQuestionsChange: PropTypes.func.isRequired,
}

export default QuestionSelector
