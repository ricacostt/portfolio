/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      bglight: "#ffffff",
      bgdark: "#162440",
      textlight: "#46465A",
      textdark: "#E3EBF3",
      buttonprimarylight: "#313CBD",
      buttontextlight: "#1C4396",
      buttonsecondarylight: "#F5F9FF",
      buttonprimarydark: "#E3EBF3",
      buttontextdark: "#E3EBF3",
      buttonsecondarydark: "#535B8B",
    },
    // screens: {
    //   sm: "320px",
    //   md: "390px",
    //   lg: "1280px",
    //   xl: "1728px",
    // },
    fontSize:{
      xsm: '0.625rem',
      sm: '0.75rem',
      base: '1rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem'
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};
