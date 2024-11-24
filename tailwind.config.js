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

      dropShadow: {
        '4dark': '4px 4px 4px rgba(0, 0, 0, 0.75)'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}

