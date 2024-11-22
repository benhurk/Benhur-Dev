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
      },
      
      keyframes: {
        'border-spin': {
          '100%': {
            'transform': 'rotate(-360deg)'
          }
        }
      },

      animation: {
        'border-spin': 'border-spin 3s linear infinite'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
}

