/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-1': '#678C92',
        'green-2': '#486A6F',
        'green-3': '#4397A4',
        'blue-1': '#A8C7FC',
      },
      fontFamily: {
        'body': ['Ubuntu'],
        'title': ['"Lobster Two"'],
      }
    },
  },
  plugins: [],
}
