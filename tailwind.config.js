/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "videopoint":"340px",
      },
      colors: {
        "main": "#adccb7",
        "main2": "#ccc0ad",
        "main3": "#776549",
        "bg-body": "#faf5ef"
      },
      keyframes: {
        drawTop: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        drawSides: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
        drawBottom: {
          '0%': { width: '0%' },
          '100%': { width: '50%' },
        },
        hithere: {
          '30%': { transform: 'scale(1.2)' },
          '40%, 60%': { transform: 'rotate(-20deg) scale(1.2)' },
          '50%': { transform: 'rotate(20deg) scale(1.2)' },
          '70%': { transform: 'rotate(0deg) scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        drawTop: 'drawTop 0.3s forwards',
        drawSides: 'drawSides 0.3s 0.3s forwards', // delay de 0.5s para empezar después de la línea superior
        drawBottom: 'drawBottom 0.3s 0.6s forwards', // delay de 1s para empezar después de los lados
        hithere: 'hithere 1s ease forwards', // Añade tu animación aquí
      },
    },
  },
  plugins: [],
});
