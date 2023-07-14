/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '0.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Mabry pro', 'sans-serif']
      },
      boxShadow: {
        'brutal-x': '5px 5px 0px rgba(0, 0, 0)'
      },
      colors: {
        'royalblue': 'royalblue',
        'spanishyellow': '#f9b409',
        'orangeyellow': '#f9d16a',
        'ming': '#2a687a',
        'russiangreen': '#72a25e',
        'khaki': '#c3b49e',
        'blackcoffe': '#3c3434',
        'light-gray': '#f3f3f3',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
