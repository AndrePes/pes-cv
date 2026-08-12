/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070b14',
        panel: '#0c1220',
        electric: '#2997ff',
      },
      fontFamily: {
        sans: ['Inter', 'Avenir Next', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 70px rgba(41, 151, 255, 0.18)',
      },
    },
  },
  plugins: [],
}
