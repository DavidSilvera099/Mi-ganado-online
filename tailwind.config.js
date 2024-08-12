/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/App.jsx", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'Azul': '#3e5586',
        'Turquesa': '#5da8a0',
        'VerdeClaro': '#cbe552',
        'VerdeOscuro': '#95b54c',
        'VerdeMusgo': '#607123'
      }
    },
  },
  plugins: [],
}

