/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3861fb',
        secondary: '#00acac',
      },
    },
  },
  plugins: [],
  purge: {
    mode: 'all',
    content: ['./src/components/**/**/*.{ts, tsx}'],
  },
};
