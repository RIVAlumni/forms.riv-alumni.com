/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
