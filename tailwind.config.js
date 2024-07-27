/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      Sans: ['Alumni Sans', 'League Spartan', 'sans-serif'],
      SansSerif: ['League Gothic', 'sans-serif'],
      Serif: ['Vast Shadow', 'serif']
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
}