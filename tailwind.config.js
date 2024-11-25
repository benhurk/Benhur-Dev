/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': '"Anonymous Pro", monospace'
      },

      colors: {
        'dark': '#051923',
        'light': '#E9FFF9'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}

