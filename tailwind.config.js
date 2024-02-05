/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        'dark': "#150819",
        'light-background': "#FBF7FC",
        'vibrant-purple': "#A848C1",
        'soft-peach': "#DDA19B",
        'warm-tan': "#D2AB79"
      },
      fontFamily: {
        'news-cycle': ['"News Cycle"', 'sans-serif'],
        'oswald': ['"Oswald Variable"', 'sans-serif'],
        'nunito-sans': ['"Nunito Sans Variable"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

