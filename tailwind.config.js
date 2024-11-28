/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        whites: {
          white_200: '#F0EFEB',
        },
        oranges: {
          orange_100: '#FB5607',
          orange_700: '#DC2F02',
        },
        blacks: {
          black_100: '#000000',
          black_200: '#141414',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        sm: '320px',
      }
    },
  },
  plugins: [],
}