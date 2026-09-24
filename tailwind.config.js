/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hearth: {
          50: '#fdfbf7',
          100: '#f7f2e7',
          200: '#eddcc4',
          300: '#e1be99',
          400: '#d39b6e',
          500: '#c67d49',
          600: '#b8663d',
          700: '#994f34',
          800: '#7c412f',
          900: '#643729',
          950: '#361b14',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
