/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': '"Geo", sans-serif'
      },

      colors: {
        'dark': '#051923',
        'light': '#E9FFF9'
      },

      keyframes: {
        'blink': {
          'from, to': { color: 'transparent' },
          '50%': { color: 'white' }
        }
      },

      animation: {
        'blink': 'blink 1s step-end infinite',
        'spin-slow': 'spin 20s linear infinite'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}

