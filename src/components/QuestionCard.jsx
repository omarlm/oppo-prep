import PropTypes from 'prop-types'

const QuestionCard = ({
    question,
    options,
    correctAnswer,
    userAnswer,
    checked,
    onAnswerSelect,
    className,
}) => {
    const handleAnswerChange = (event) => {
        onAnswerSelect(event.target.value)
    }

    return (
        <div className={`avoid-page-break rounded-lg border border-gray-300 ${className}`}>
            <div className="bg-blue-100 p-2 rounded-t-lg">
                <h3 className="text-lg font-semibold">{question}</h3>
            </div>
            <div className="p-4">
                <ul className="space-y-2">
                    {Object.entries(options).map(([key, value]) => (
                        <li key={key}>
                            <label className="flex items-start space-x-2">
                                <input
                                    type="radio"
                                    name={question}
                                    value={key}
                                    onChange={handleAnswerChange}
                                    checked={userAnswer === key}
                                    disabled={checked}
                                    className="form-radio text-blue-600 mt-1"
                                />
                                <span className="flex-1">
                                    <span className='text-gray-900 font-bold'>{`${key}. `}</span>
                                    {value}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {checked && (
                <div className="p-4">
                    <p
                        className={
                            userAnswer === correctAnswer
                                ? 'mt-2 p-2 font-bold text-green-700'
                                : 'mt-2 p-2 font-bold text-red-700'
                        }
                    >
                        {userAnswer === correctAnswer
                            ? 'Respuesta correcta'
                            : `Respuesta incorrecta. La respuesta correcta es: ${correctAnswer}`}
                    </p>
                </div>
            )}
        </div>
    )
}

QuestionCard.propTypes = {
    question: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    correctAnswer: PropTypes.string.isRequired,
    userAnswer: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onAnswerSelect: PropTypes.func.isRequired,
    className: PropTypes.string, // className es opcional, por eso no lleva isRequired
}

export default QuestionCard
