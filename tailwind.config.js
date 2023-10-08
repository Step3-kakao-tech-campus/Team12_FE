/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#74B4FF',
        blue: '#0075FF',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwind-scrollbar-hide')],
};
