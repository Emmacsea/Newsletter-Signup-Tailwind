/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          tomato: "hsl(4, 100%, 67%)",
        },

        neutral: {
          white: "hsl(0, 0%, 100%)",
          grey: "hsl(231, 7%, 60%)",
          charcoalgrey: "hsl(235, 18%, 26%)",
          dslategrey: "hsl(234, 29%, 20%)",
        }
      },


      
    },
  },
  plugins: [],
}