/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#001A78',
        'primary-dark': '#000D48',
        secondary: '#FF7A30'
      }
    },
  },
  plugins: [],
}
