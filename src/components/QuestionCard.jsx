import React from 'react'

const QuestionCard = ({ question, options, correctAnswer, userAnswer, checked, onAnswerSelect }) => {
    const handleAnswerChange = (event) => {
        onAnswerSelect(event.target.value)
    };

    return (
        <div className="my-4 mx-4 p-4 border text-pretty">
            <h3 className='font-bold'>{question}</h3>
            <ul>
                {Object.entries(options).map(([key, value]) => (
                    <li key={key} className="mb-2">
                        <label className="flex items-center space-x-2 text-sm md:text-base">
                            <input
                                type="radio"
                                name={question}
                                value={key}
                                onChange={handleAnswerChange}
                                checked={userAnswer === key}
                                disabled={checked}
                                className="form-radio h-4 w-4"
                            />
                            <span>{`${key}) ${value}`}</span>
                        </label>
                    </li>
                ))}
            </ul>

            {checked && (
                <p className={
                    userAnswer === correctAnswer
                        ? "mt-2 bg-green-100 border-green-500 text-green-700"
                        : "mt-2 bg-red-100 border-red-500 text-red-700"
                }>
                    {userAnswer === correctAnswer
                        ? "Respuesta Correcta"
                        : `Respuesta Incorrecta. La correcta es: ${correctAnswer}`}
                </p>
            )}
        </div>
    );
};

export default QuestionCard
