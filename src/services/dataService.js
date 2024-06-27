import { shuffleArray } from '../utils/utils'

export const getRandomQuestions = async (category) => {
    try {
        const response = await import(`../data/${category}.json`)
        const data = response.default

        if (data) {
            const randomizedData = shuffleArray(data)

            return randomizedData.slice(0, 20)
        } else {
            console.error('Data is null or undefined.')
            return null
        }
    } catch (error) {
        console.error('Error loading JSON data:', error)
        return null
    }
}
