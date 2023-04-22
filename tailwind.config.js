/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      bglight: "#ffffff",
      bglightopa: 'rgba(255,255,255,0.9)',
      bgdark: "#162440",
      bgdarkopa: 'rgba(22,36,64,0.9)',
      bgcard: '#111D33',
      textlight: "#46465A",
      textdark: "#E3EBF3",
      buttonprimarylight: "#313CBD",
      buttontextlight: "#1C4396",
      buttonsecondarylight: "#F5F9FF",
      buttonprimarydark: "#E3EBF3",
      buttontextdark: "#E3EBF3",
      buttonsecondarydark: "#535B8B",
      cardbgdark: "rgba(79,179,141,0.1)",
      textaccent: '#4A79D9'
    },
  screens: {
  'xsm': "498px",
  'ms': '640px',
  'md': '768px',
  'lg':'1024px',
  'xl': '1280px',
  '2xl': '1536px',
  '3mxl': '1120px'
   },
    fontSize:{
      xsm: '0.625rem', //10px
      sm: '0.75rem', // 12px
      base: '1rem', //16px
      xl: '1.5rem', //24px
      '2xl': '2rem', //32px
      '3xl': '2.5rem', //40px
      '4xl': '5rem', //80px
      '5xl': '4rem', //64px
      '6xl': '3.5rem' //56px
    },
    extend: {
      backgroundImage: {

      }
    },
  },
  plugins: [ require("daisyui")],
};
