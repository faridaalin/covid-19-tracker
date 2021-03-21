module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        shark: {
          50: '#889191',
          100: '#7B8585',
          200: '#636A6A',
          300: '#4A5050',
          400: '#323535',
          500: '#191B1B',
          600: '#000101',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Crimson Pro', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
