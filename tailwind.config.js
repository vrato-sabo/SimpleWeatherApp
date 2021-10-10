module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navgray: '#53657A',
      },
      width: {
        450: '450px',
      },
      minWidth: {
        450: '450px',
      },
      screens: {
        896: '940px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
