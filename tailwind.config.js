/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'InterVariable',
                    'Inter',
                    'system-ui',
                    '-apple-system',
                    'sans-serif',
                ],
            },
            maxWidth: {
                content: '820px',
            },
        },
    },
    plugins: [],
}
