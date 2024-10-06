import { shuffleArray } from '../utils/utils'

export const getRandomQuestions = async (category, numQuestions = 20) => {
    try {
        const response = await import(`../data/${category}.json`)
        const data = response.default

        if (data) {
            const randomizedData = shuffleArray(data)

            // Devolver solo el número de preguntas seleccionadas
            return randomizedData.slice(0, numQuestions)
        } else {
            console.error('Data is null or undefined.')
            return null
        }
    } catch (error) {
        console.error('Error loading JSON data:', error)
        return null
    }
}
