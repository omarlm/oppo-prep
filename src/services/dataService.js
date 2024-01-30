import { shuffleArray, shuffleOptions } from '../utils/utils'

export const getRandomQuestions = async (category) => {
    try {
        const response = await import(`../data/${category}.json`)
        const data = response.default

        if (data) {
            const randomizedData = shuffleArray(data)

            const limitedData = randomizedData.slice(0, 20)

            // const dataWithRandomizedOptions = limitedData.map((item) => {
            //     const randomizedOptions = shuffleOptions(item.options);
            //     return { ...item, options: randomizedOptions };
            // });
            return limitedData;
        } else {
            console.error("Data is null or undefined.")
            return null
        }
    } catch (error) {
        console.error("Error loading JSON data:", error)
        return null
    }
};

