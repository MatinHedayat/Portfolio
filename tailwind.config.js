/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      outfit: ['Outfit', 'sans-serif'],
      true: ['True Lies', 'sans-serif'],
    },
    extend: {
      colors: {
        aliceblue: 'aliceblue',
        cream: '#ccccca',
      },
      screens: {
        ss: '400px',
      },
      keyframes: {
        rotateOpacity: {
          '0%': { opacity: '0', transform: 'rotate(45deg)' },
          '100%': { opacity: '1', transform: 'rotate(0)' },
        },
        opacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        show: {
          '0%': { opacity: 0, transform: 'translateX(-2rem)' },
          '100%': { opacity: 100, transform: 'translateX(0)' },
        },
      },
      animation: {
        rotateOpacity: 'rotateOpacity 0.3s ease-in-out 1',
        opacity: 'opacity 0.2s ease-in-out 1',
        spin: 'spin 20s linear infinite',
        show: 'show 0.3s ease-in-out 1',
      },
    },
  },
  plugins: [],
};
