/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Mabry pro', 'sans-serif']
      },
      boxShadow: {
        'brutal-x': '5px 5px 0px rgba(0, 0, 0)'
      },
      colors: {
        'brutal-blue': '#3300ee'
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
