/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#6019B7',
          500: '#8C30F5',
          400: '#D6B1FF',
          300: '#F1E4FF',
          200: '#faf5ff',
        },
      },
    },
  },
  plugins: [],
};
