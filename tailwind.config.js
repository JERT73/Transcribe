/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-1': '2px 2px 5px rgba(255, 255, 255, 1)',
        'custom-2': '3px 3px 7px rgba(255, 255, 255, 1)',
      }
    },
  },
  plugins: [
    daisyui,
  ],
}