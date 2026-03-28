import { useState, useEffect, useCallback } from 'react'

const STORAGE_PREFIX = 'oppoprep-session-'

const usePersistedSession = (categoryId) => {
    const storageKey = `${STORAGE_PREFIX}${categoryId}`

    const [hasSavedSession, setHasSavedSession] = useState(false)

    useEffect(() => {
        try {
            const saved = localStorage.getItem(storageKey)
            setHasSavedSession(saved !== null)
        } catch {
            setHasSavedSession(false)
        }
    }, [storageKey])

    const saveSession = useCallback(
        (session) => {
            try {
                localStorage.setItem(storageKey, JSON.stringify(session))
            } catch {
                // localStorage full or unavailable
            }
        },
        [storageKey]
    )

    const loadSession = useCallback(() => {
        try {
            const saved = localStorage.getItem(storageKey)
            return saved ? JSON.parse(saved) : null
        } catch {
            return null
        }
    }, [storageKey])

    const clearSession = useCallback(() => {
        try {
            localStorage.removeItem(storageKey)
            setHasSavedSession(false)
        } catch {
            // ignore
        }
    }, [storageKey])

    return { hasSavedSession, saveSession, loadSession, clearSession }
}

export default usePersistedSession
