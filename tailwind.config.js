/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#74B4FF',
        blue: '#0075FF',
        gray: '#8F8F8F',
      },
    },
    keyframes: {
      fadeInMoveRight: {
        '0%': { opacity: '0', transform: 'translateX(-10px)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
    },
    animation: {
      'fade-in-move-right': 'fadeInMoveRight 1s ease-out forwards',
      'fade-in-move-right-delayed': 'fadeInMoveRight 1s ease-out 1s forwards',
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('tailwind-scrollbar-hide')],
};
