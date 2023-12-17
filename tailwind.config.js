/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark:'#0B0C10',
        dark_light:'#1F2833',
        primary:'#C5C6C7',
        shade1:'#fff',
        shade2:'#33CAC1',
        background:"#2B3842"
        
      },
      fontFamily:{
        heading:[ 'Outfit', 'sans-serif'],
        primary: ['Raleway', 'sans-serif']
      },
    },
  },
  plugins: [],
}