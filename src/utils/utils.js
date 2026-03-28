export const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

export const shuffleOptions = (options, correctAnswer) => {
    const keys = Object.keys(options)
    const shuffledKeys = shuffleArray(keys)
    const shuffledOptions = {}
    let newCorrectAnswer = correctAnswer

    keys.forEach((originalKey, i) => {
        shuffledOptions[originalKey] = options[shuffledKeys[i]]
        if (shuffledKeys[i] === correctAnswer) {
            newCorrectAnswer = originalKey
        }
    })

    return { options: shuffledOptions, correctAnswer: newCorrectAnswer }
}

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
