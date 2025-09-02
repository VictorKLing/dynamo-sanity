/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4A90FF',
          DEFAULT: '#4A90FF',
          dark: '#142D55',
        }
      },
    },
  },
  plugins: [],
};