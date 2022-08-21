/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screen: {
      sm: '640px',
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      primary: {
        100: '#DAE2F9',
        200: '#C7D5FB',
        300: '#96B2FF',
        400: '#618AF9',
        500: '#2B62F6',
        600: '#3243DA',
        700: '#2A2D9E',
        800: '#1D2080',
      },
      lightBlue: {
        100: '#DAE2F9',
      },
    },
    extend: {},
  },
}
