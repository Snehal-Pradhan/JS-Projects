/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
        lexend: ['"Lexend"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui,],
}

