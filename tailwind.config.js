/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // trebuie să fie 'class', nu 'media'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

