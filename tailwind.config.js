/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Instagram.html"],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      
      }
    },
  },
  plugins: [ 
  require('@tailwindcss/forms'),
  require('tailwind-scrollbar'),
],
  


}

