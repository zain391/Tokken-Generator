/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   

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
