const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{html,ts,tsx}'],
  theme: {
    extend: {
      colors
    }
  },
  plugins: []
}
