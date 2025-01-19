/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '16px': '16px', // Custom font size
        '20px': '0px', // Custom font size

      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        dblack:"#282828",
        dgray:"#383c44",
        tgray:"#646e7e",
        dwhite:'#adbad8'
      }
    },
  },
  plugins: [],
}