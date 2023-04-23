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
      textlight: "#0B4F6C",
      buttonprimarylight: "#f57dff",
      buttontextlight: "#1c4396",

      textaccent: '#f57dff',

      bgdark: "#00243d",
      bgdark2: "#002D3D",
      bgdarkopa: 'rgba(22,36,64,0.9)',
      bgcard: '#001829',
      textdark: "#f5f9ff",
      buttonsecondarylight: "#F5F9FF",
      buttonprimarydark: "#E3EBF3",
      buttontextdark: "#E3EBF3",
      buttonsecondarydark: "#8789c0"
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
