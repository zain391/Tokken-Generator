/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
   

],
  theme: {
    extend: {
      spacing: {
        '13': '10.25rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]

}
