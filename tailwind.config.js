/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      'midnight-navy': '#2B2D42',
      'loudy-slate': '#8D99AE',
      'crisp-frost': '#EDF2F4',
      'vibrant-coral':' #EF233C',
      'racing-red': '#D90429',
      }
    },
  },
  plugins: [],
}