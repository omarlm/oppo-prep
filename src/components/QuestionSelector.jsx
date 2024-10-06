import PropTypes from 'prop-types'

const QuestionSelector = ({ numQuestions, onNumQuestionsChange }) => {
    return (
        <div className="mb-4">
            <label htmlFor="numQuestions" className="text-lg font-semibold">
                Selecciona el número de preguntas:
            </label>
            <select
                id="numQuestions"
                value={numQuestions}
                onChange={(e) => onNumQuestionsChange(Number(e.target.value))}
                className="ml-2 p-2 border border-gray-300 rounded-lg"
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
