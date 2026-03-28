import { shuffleArray, shuffleOptions } from '../utils/utils'

const cleanQuestion = (text) => text.replace(/^\d+\.\s*/, '')

export const getRandomQuestions = async (category, numQuestions = 20) => {
    try {
        const response = await import(`../data/${category}.json`)
        const data = response.default

        if (data) {
            const randomizedData = shuffleArray(data)
                .slice(0, numQuestions)
                .map((q, i) => {
                    const { options, correctAnswer } = shuffleOptions(
                        q.options,
                        q.correct_answer
                    )
                    return {
                        ...q,
                        id: `q-${i}-${q.question.substring(0, 40)}`,
                        question: cleanQuestion(q.question),
                        options,
                        correct_answer: correctAnswer,
                    }
                })

            return randomizedData
        } else {
            console.error('Data is null or undefined.')
            return null
        }
    } catch (error) {
        console.error('Error loading JSON data:', error)
        return null
    }
}
