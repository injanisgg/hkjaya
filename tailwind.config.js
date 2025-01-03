/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue" : "#141B3E",
        "letter-blue" : "#29367C",
        "footer-grey" : "#FFFFFFF2",
        "line-grey" : "#FFFFFFCC",
        "border-grey" : "#FFFFFF80",
      }, 
      fontFamily: {},
      screens: {
        // mobile small - large
        sm : "480px",
        md : "768px",
        //pc or laptop small - large
        lg : "1024px",
        xl : "1280px",
      },
      boxShadow: {
        'below': '0 4px 6px rgba(0, 0, 0, 0.1)', // Shadow hanya di bawah
      }
    },
  },
  plugins: [],
}

