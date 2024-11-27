/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1cbc9c',
        'primary-dark': '#169e83',
        accent: '#f39c12',
      },
    },
  },
  plugins: [],
};