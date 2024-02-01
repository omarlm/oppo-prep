import React, { useState, useEffect } from 'react'
import { getRandomQuestions } from '../services/dataService'
import QuestionCard from '../components/QuestionCard'
import Modal from '../components/Modal'
import { scrollToTop } from '../utils/utils'

const SocialWork = () => {
    const [data, setData] = useState([])
    const [answers, setAnswers] = useState('')
    const [checked, setChecked] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [score, setScore] = useState(0)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await getRandomQuestions('questions_social_worker')
        if (data) {
            setData(data)
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

    const allAnswered =
        data.length > 0 &&
        Object.values(answers).every((answer) => answer !== null)

    return (
        <>
            <h1 className="mx-4 my-4 text-4xl">Trabajador/a Social</h1>
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
                            ? 'bg-blue-500 hover:bg-blue-600'
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

export default SocialWork
