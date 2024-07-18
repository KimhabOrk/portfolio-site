/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./assets/js/preline.js",
    "./assets/js/flowbite.js"
  ],
  theme: {
    fontFamily: {
      sansSerif: ['Ubuntu', 'sans-serif'],
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin'),
    require('daisyui'),
  
  ],
}