import React, { useState, useEffect } from 'react'
import { getRandomQuestions } from '../services/dataService'
import QuestionCard from '../components/QuestionCard'
import Modal from '../components/Modal'
import { scrollToTop } from '../utils/utils'

const SpeechTherapy = () => {
    const [data, setData] = useState([])
    const [answers, setAnswers] = useState('')
    const [checked, setChecked] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [score, setScore] = useState(0)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        const data = await getRandomQuestions('questions_speech_therapy')
        if (data) {
            setData(data)
            setLoading(false)
            setAnswers(
                data.reduce((acc, _, index) => ({ ...acc, [index]: null }), {})
            )
            setChecked(false)
        }
    }

    const handleAnswer = (index, answer) => {
        setAnswers((prev) => ({ ...prev, [index]: answer }))
    }

    const checkAnswers = () => {
        const calculatedScore = data.reduce((total, question, index) => {
            return answers[index] === question.correct_answer
                ? total + 1
                : total
        }, 0)

        setScore(calculatedScore)
        setShowModal(true)
        setChecked(true)
    }

    const refreshQuestions = () => {
        fetchData()
        scrollToTop()
    }

    const closeModal = () => {
        setShowModal(false)
    }

    if (isLoading) {
        return (
            <div
                role="status"
                className="flex h-screen items-center justify-center"
            >
                <svg
                    aria-hidden="true"
                    className="inline h-8 w-8 animate-spin fill-purple-600 text-gray-200 dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                    />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                    />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    const allAnswered =
        data.length > 0 &&
        Object.values(answers).every((answer) => answer !== null)

    return (
        <>
            <h1 className="mx-4 my-4 text-3xl font-semibold text-[#2b2c34]">
                Logopedia
            </h1>
            {data.map((item, index) => (
                <QuestionCard
                    key={index}
                    question={item.question}
                    options={item.options}
                    correctAnswer={item.correct_answer}
                    userAnswer={answers[index]}
                    checked={checked}
                    onAnswerSelect={(answer) => handleAnswer(index, answer)}
                />
            ))}
            <div className="mx-4 my-4 flex flex-col justify-start space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button
                    type="button"
                    className={`w-full rounded border-none px-6 py-2.5 text-sm font-semibold text-white outline-none ${
                        allAnswered
                            ? 'bg-[#6246ea] hover:bg-[#4f39c0]'
                            : 'cursor-not-allowed bg-gray-500'
                    }`}
                    onClick={checkAnswers}
                    disabled={!allAnswered}
                >
                    Verificar Respuestas
                </button>

                <Modal
                    show={showModal}
                    onClose={closeModal}
                    score={score}
                    total={data.length}
                />

                <button
                    type="button"
                    className="mt-8 w-full rounded border-none bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white outline-none hover:bg-teal-600"
                    onClick={refreshQuestions}
                >
                    Refrescar Preguntas
                </button>
            </div>
        </>
    )
}

export default SpeechTherapy
