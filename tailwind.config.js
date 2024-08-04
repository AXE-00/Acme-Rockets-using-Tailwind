/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens: {
        'wideScreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallScreen': {'raw': '(min-aspect-ratio: 1/2)'}
      }
    },
  },
  plugins: [],
}

