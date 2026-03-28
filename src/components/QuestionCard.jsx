import PropTypes from 'prop-types'
import { CheckCircle2, XCircle } from 'lucide-react'

const QuestionCard = ({
    questionNumber,
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

    const questionId = `question-${questionNumber}`
    const isCorrect = userAnswer === correctAnswer

    return (
        <div
            className={`avoid-page-break overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow hover:shadow-md ${
                checked
                    ? isCorrect
                        ? 'border-emerald-200'
                        : 'border-red-200'
                    : 'border-slate-200'
            } ${className || ''}`}
        >
            <div className="flex items-start gap-3 border-b border-slate-100 px-4 py-3.5 sm:px-5 sm:py-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                    {questionNumber}
                </span>
                <h3
                    id={questionId}
                    className="text-[15px] font-medium leading-relaxed text-slate-800"
                >
                    {question}
                </h3>
            </div>

            <fieldset
                className="px-4 py-2.5 sm:px-5 sm:py-3"
                aria-labelledby={questionId}
            >
                <legend className="sr-only">
                    {questionNumber}. {question}
                </legend>
                <div className="space-y-1.5">
                    {Object.entries(options).map(([key, value]) => {
                        const isSelected = userAnswer === key
                        const isCorrectOption = key === correctAnswer
                        let optionStyle =
                            'border-transparent hover:bg-slate-50 active:bg-slate-100'

                        if (checked && isSelected && isCorrect) {
                            optionStyle = 'border-emerald-200 bg-emerald-50'
                        } else if (checked && isSelected && !isCorrect) {
                            optionStyle = 'border-red-200 bg-red-50'
                        } else if (checked && isCorrectOption) {
                            optionStyle = 'border-emerald-200 bg-emerald-50/50'
                        }

                        return (
                            <label
                                key={key}
                                className={`flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-3 transition-colors sm:py-2.5 ${optionStyle} ${checked ? 'cursor-default' : ''}`}
                            >
                                <input
                                    type="radio"
                                    name={questionId}
                                    value={key}
                                    onChange={handleAnswerChange}
                                    checked={isSelected}
                                    disabled={checked}
                                    className="mt-0.5 h-4 w-4 border-slate-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <span className="flex-1 text-[14px] leading-relaxed text-slate-700">
                                    <span className="font-semibold text-slate-500">
                                        {key}.{' '}
                                    </span>
                                    {value}
                                </span>
                            </label>
                        )
                    })}
                </div>
            </fieldset>

            {checked && (
                <div
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium sm:px-5 ${
                        isCorrect
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-red-50 text-red-700'
                    }`}
                    aria-live="polite"
                >
                    {isCorrect ? (
                        <>
                            <CheckCircle2 className="h-4 w-4 shrink-0" />
                            Respuesta correcta
                        </>
                    ) : (
                        <>
                            <XCircle className="h-4 w-4 shrink-0" />
                            Incorrecta — la respuesta es: {correctAnswer}
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

QuestionCard.propTypes = {
    questionNumber: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.objectOf(PropTypes.string).isRequired,
    correctAnswer: PropTypes.string.isRequired,
    userAnswer: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onAnswerSelect: PropTypes.func.isRequired,
    className: PropTypes.string,
}

export default QuestionCard
