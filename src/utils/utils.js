export const shuffleArray = (array) => {
    const shuffledArray = [...array]
    return shuffledArray.sort(() => Math.random() - 0.5)
};

export const shuffleOptions = (options) => {
    const optionKeys = Object.keys(options)
    const shuffledKeys = shuffleArray(optionKeys)
    const shuffledOptions = {}

    shuffledKeys.forEach((key, index) => {
        shuffledOptions[key] = options[shuffledKeys[index]]
    });

    return shuffledOptions
};

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
