/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{html,js}", 
          ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["poppins", "sans-serif"],
      },
      container : {
        center : true,
        padding : '16px',
        screens : {
          'sm': "512px",
          'md': "720px",
          'lg': "1024px",
          'xl': "1140px",
          '2xl': "1320px",
        }
      },
      backgroundImage :{
        'hero-img': "url('/src/images/hero-bg.jpeg')",
      },
      colors:{
        primary : '#13eaed',
        pale : '#969ab3',
        secondary : '#10b981',
        dark : '#1f242d',
      },
    },
  },
  plugins: [
  ],
}

