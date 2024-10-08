import { useState, useEffect, useCallback } from 'react'
import { getRandomQuestions } from '../services/dataService'
import QuestionCard from '../components/QuestionCard'
import Modal from '../components/Modal'
import { scrollToTop } from '../utils/utils'
import { Loading } from '../components/Loading.jsx'
import QuestionSelector from '../components/QuestionSelector'

const SocialWork = () => {
    const [data, setData] = useState([])
    const [answers, setAnswers] = useState('')
    const [checked, setChecked] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [score, setScore] = useState(0)
    const [isLoading, setLoading] = useState(false)
    const [numQuestions, setNumQuestions] = useState(5) // Número de preguntas por defecto

    const fetchData = useCallback(async () => {
        setLoading(true)
        const data = await getRandomQuestions('questions_social_worker', numQuestions)
        if (data) {
            setData(data)
            setLoading(false)
            setAnswers(
                data.reduce((acc, _, index) => ({ ...acc, [index]: null }), {})
            )
            setChecked(false)
        }
    }, [numQuestions])

    useEffect(() => {
        fetchData()
    }, [fetchData])

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

    const printQuestions = () => {
        window.print()
    }

    if (isLoading) {
        return <Loading />
    }

    const allAnswered =
        data.length > 0 &&
        Object.values(answers).every((answer) => answer !== null)

    return (
        <div className="min-h-screen p-4">
            <h1 className="text-4xl font-extrabold text-center mb-8">
                Trabajador/a Social
            </h1>

            {/* Botón para imprimir preguntas al principio */}
            <div className="mb-4 avoid-print">
                <button
                    type="button"
                    className="w-full rounded-lg px-6 py-3 text-lg font-semibold text-blue-600 border border-blue-600 hover:bg-blue-50"
                    onClick={printQuestions}
                >
                    Imprimir preguntas
                </button>
            </div>

            {/* Uso del componente QuestionSelector */}
            <QuestionSelector
                numQuestions={numQuestions}
                onNumQuestionsChange={setNumQuestions}
            />

            <div id="questions-section">
                {data.map((item, index) => (
                    <QuestionCard
                        key={index}
                        question={item.question}
                        options={item.options}
                        correctAnswer={item.correct_answer}
                        userAnswer={answers[index]}
                        checked={checked}
                        onAnswerSelect={(answer) => handleAnswer(index, answer)}
                        className={`avoid-page-break rounded-lg border border-gray-300 p-4 ${index !== 0 ? 'mt-6' : ''}`}
                    />
                ))}
            </div>

            <div className="mt-8 avoid-print">
                <button
                    type="button"
                    className={`w-full rounded-lg px-6 py-3 text-lg font-semibold text-white ${allAnswered
                        ? 'bg-blue-600 hover:bg-blue-500'
                        : 'cursor-not-allowed bg-gray-400'
                        }`}
                    onClick={checkAnswers}
                    disabled={!allAnswered}
                >
                    Verificar respuestas
                </button>

                <Modal
                    show={showModal}
                    onClose={closeModal}
                    score={score}
                    total={data.length}
                />

                <button
                    type="button"
                    className="w-full rounded-lg px-6 py-3 text-lg font-semibold text-blue-600 border border-blue-600 hover:bg-blue-50 mt-6"
                    onClick={refreshQuestions}
                >
                    Refrescar preguntas
                </button>
            </div>
        </div>
    )
}

export default SocialWork
