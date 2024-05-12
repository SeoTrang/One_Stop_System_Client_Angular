/** @type {import('tailwindcss').Config} */
require("@tailwindcss/typography")
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-all')
  ],
  
  
}