/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ['Alumni Sans', 'League Spartan', 'sans-serif'],
      'sans-serif': ['League Gothic', 'sans-serif'],
      serif: ['Vast Shadow', 'serif']
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
}