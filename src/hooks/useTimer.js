import { useState, useEffect, useCallback } from 'react'

const useTimer = (initialMinutes = 0) => {
    const [timeLeft, setTimeLeft] = useState(initialMinutes * 60)
    const [isRunning, setIsRunning] = useState(false)
    const [isExpired, setIsExpired] = useState(false)

    useEffect(() => {
        if (!isRunning || timeLeft <= 0) return
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setIsRunning(false)
                    setIsExpired(true)
                    return 0
                }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [isRunning, timeLeft])

    const start = useCallback(() => {
        setIsExpired(false)
        setIsRunning(true)
    }, [])

    const pause = useCallback(() => setIsRunning(false), [])

    const reset = useCallback(
        (minutes) => {
            setTimeLeft(minutes * 60)
            setIsRunning(false)
            setIsExpired(false)
        },
        []
    )

    return { timeLeft, isRunning, isExpired, start, pause, reset }
}

export default useTimer
