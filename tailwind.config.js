/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
        cinzel: "'Cinzel', serif",
        raleWay: "'Raleway', sans-serif"
      },
      backgroundImage: {
        featured: "url('/src/assets/home/featured.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

