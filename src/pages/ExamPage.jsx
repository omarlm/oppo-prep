import { useState, useEffect, useCallback } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getRandomQuestions } from '../services/dataService'
import QuestionCard from '../components/QuestionCard'
import Modal from '../components/Modal'
import FloatingBar from '../components/FloatingBar'
import { scrollToTop } from '../utils/utils'
import { Loading } from '../components/Loading.jsx'
import useTimer from '../hooks/useTimer'
import usePersistedSession from '../hooks/usePersistedSession'
import categories from '../config/categories'
import { Printer, RefreshCw } from 'lucide-react'

const ExamPage = () => {
    const { categoryId } = useParams()
    const category = categories.find((c) => c.id === categoryId)

    const [data, setData] = useState([])
    const [answers, setAnswers] = useState({})
    const [checked, setChecked] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [score, setScore] = useState(0)
    const [isLoading, setLoading] = useState(true)
    const [isReloading, setReloading] = useState(false)
    const [error, setError] = useState(null)
    const [numQuestions, setNumQuestions] = useState(5)
    const [timerMinutes, setTimerMinutes] = useState(0)

    const timer = useTimer(0)
    const { hasSavedSession, saveSession, loadSession, clearSession } =
        usePersistedSession(categoryId)

    const fetchData = useCallback(
        async (reload = false) => {
            if (!category) return
            if (reload) {
                setReloading(true)
            } else {
                setLoading(true)
            }
            setError(null)
            const result = await getRandomQuestions(
                category.dataFile,
                numQuestions
            )
            if (result) {
                setData(result)
                setAnswers(
                    result.reduce(
                        (acc, _, index) => ({ ...acc, [index]: null }),
                        {}
                    )
                )
                setChecked(false)
                clearSession()
            } else {
                setError('No se pudieron cargar las preguntas.')
            }
            setLoading(false)
            setReloading(false)
        },
        [numQuestions, category, clearSession]
    )

    // Re-fetch when numQuestions changes
    useEffect(() => {
        if (data.length > 0) {
            fetchData(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [numQuestions])

    useEffect(() => {
        if (hasSavedSession) {
            const session = loadSession()
            if (session) {
                setData(session.data)
                setAnswers(session.answers)
                setNumQuestions(session.numQuestions)
                if (session.timerMinutes) {
                    setTimerMinutes(session.timerMinutes)
                }
                setChecked(false)
                setLoading(false)
                return
            }
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (data.length > 0 && !checked) {
            saveSession({ data, answers, numQuestions, timerMinutes })
        }
    }, [answers, data, checked, numQuestions, timerMinutes, saveSession])

    useEffect(() => {
        if (timer.isExpired && !checked && data.length > 0) {
            checkAnswers()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer.isExpired])

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
        timer.pause()
        clearSession()
    }

    const refreshQuestions = () => {
        timer.reset(timerMinutes)
        fetchData(true)
        scrollToTop()
    }

    const handleTimerMinutesChange = (minutes) => {
        setTimerMinutes(minutes)
        timer.reset(minutes)
    }

    if (!category) {
        return <Navigate to="/" replace />
    }

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return (
            <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
                <p className="text-lg font-semibold text-red-600">Error</p>
                <p className="mt-1 text-sm text-slate-500">{error}</p>
                <button
                    type="button"
                    className="mt-4 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
                    onClick={fetchData}
                >
                    Reintentar
                </button>
            </div>
        )
    }

    const answeredCount = Object.values(answers).filter(
        (a) => a !== null
    ).length
    const allAnswered = data.length > 0 && answeredCount === data.length

    return (
        <div className="pb-28">
            {/* Header */}
            <h1 className="text-2xl font-bold text-slate-900">
                {category.title}
            </h1>

            {/* Setup toolbar */}
            <div className="no-print mt-4 mb-6 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-2 py-2 shadow-sm sm:px-3 sm:py-2.5">
                <div className="flex items-center gap-1.5">
                    <select
                        value={numQuestions}
                        onChange={(e) =>
                            setNumQuestions(Number(e.target.value))
                        }
                        className="rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm text-slate-700 focus:border-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-300"
                        aria-label="Número de preguntas"
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    <select
                        value={timerMinutes}
                        onChange={(e) =>
                            handleTimerMinutesChange(
                                Number(e.target.value)
                            )
                        }
                        disabled={
                            timer.isRunning ||
                            (timer.timeLeft > 0 &&
                                timer.timeLeft < timerMinutes * 60)
                        }
                        className="rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm text-slate-700 focus:border-indigo-300 focus:outline-none focus:ring-1 focus:ring-indigo-300"
                        aria-label="Temporizador"
                    >
                        <option value={0}>Sin límite</option>
                        <option value={5}>5 min</option>
                        <option value={10}>10 min</option>
                        <option value={15}>15 min</option>
                        <option value={20}>20 min</option>
                        <option value={30}>30 min</option>
                        <option value={45}>45 min</option>
                        <option value={60}>60 min</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <button
                        type="button"
                        onClick={() => window.print()}
                        className="rounded-lg p-2.5 text-slate-400 transition-colors active:bg-slate-100 hover:bg-slate-100 hover:text-slate-600"
                        aria-label="Imprimir preguntas"
                    >
                        <Printer className="h-[18px] w-[18px]" />
                    </button>
                    <button
                        type="button"
                        onClick={refreshQuestions}
                        className="rounded-lg p-2.5 text-slate-400 transition-colors active:bg-slate-100 hover:bg-slate-100 hover:text-slate-600"
                        aria-label="Refrescar preguntas"
                    >
                        <RefreshCw className="h-[18px] w-[18px]" />
                    </button>
                </div>
            </div>

            {/* Questions */}
            <div className={`space-y-4 transition-opacity duration-200 ${isReloading ? 'pointer-events-none opacity-40' : ''}`}>
                {data.map((item, index) => (
                    <QuestionCard
                        key={item.id}
                        questionNumber={index + 1}
                        question={item.question}
                        options={item.options}
                        correctAnswer={item.correct_answer}
                        userAnswer={answers[index]}
                        checked={checked}
                        onAnswerSelect={(answer) =>
                            handleAnswer(index, answer)
                        }
                    />
                ))}
            </div>

            {/* Floating bar */}
            <FloatingBar
                answeredCount={answeredCount}
                totalCount={data.length}
                allAnswered={allAnswered}
                checked={checked}
                onCheck={checkAnswers}
                timer={timer}
                timerMinutes={timerMinutes}
            />

            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                score={score}
                total={data.length}
            />
        </div>
    )
}

export default ExamPage
