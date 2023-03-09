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
  darkMode: 'class',
  theme: {
    colors: {
      bglight: '#ffffff',
      bgdark: '#162440',
      textlight: '#46465A',
      textdark: '#E3EBF3',
      buttonprimarylight: '#313CBD',
      buttontextlight: '#1C4396',
      buttonsecondarylight: '#F5F9FF',
      buttonprimarydark: '#E3EBF3',
      buttontextdark: '#E3EBF3',
      buttonsecondarydark: '#535B8B'
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin'), require("daisyui")]
}
