import React from 'react'

const QuestionCard = ({
    question,
    options,
    correctAnswer,
    userAnswer,
    checked,
    onAnswerSelect,
}) => {
    const handleAnswerChange = (event) => {
        onAnswerSelect(event.target.value)
    }

    return (
        <div className="font-nunito-sans m-4 text-pretty border bg-soft-peach/20 p-4 rounded-lg">
            <h3 className="font-oswald font-bold">{question}</h3>
            <ul>
                {Object.entries(options).map(([key, value]) => (
                    <li key={key} className="my-3">
                        <label className="flex items-center space-x-2 text-sm md:text-base">
                            <input
                                type="radio"
                                name={question}
                                value={key}
                                onChange={handleAnswerChange}
                                checked={userAnswer === key}
                                disabled={checked}
                                className="h-4 w-4"
                            />
                            <span className="text-md">
                                <span className='text-[#2b2c34] font-bold'>{`${key})`} </span>
                                {`${value}`}
                            </span>
                        </label>
                    </li>
                ))}
            </ul>

            {checked && (
                <p
                    className={
                        userAnswer === correctAnswer
                            ? 'mt-2 border-green-500 bg-green-100 p-2 font-bold text-green-700'
                            : 'mt-2 border-red-500 bg-red-100 p-2 font-bold text-red-700'
                    }
                >
                    {userAnswer === correctAnswer
                        ? 'Respuesta correcta'
                        : `Respuesta incorrecta. La pregunta correcta es: ${correctAnswer}`}
                </p>
            )}
        </div>
    )
}

export default QuestionCard
