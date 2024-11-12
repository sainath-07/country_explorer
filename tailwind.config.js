/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'S_Mobile': '320px',

        'M_Mobile': '375px',

        'L_Mobile': '425px',

        'Tablet': '768px',

        'Laptop': '1024px',

        'L_Laptop': '1440px',

        '4k': '2560px',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}