const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      gray: colors.trueGray,
      white: colors.white,
      blue: colors.blue,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.emerald,
      brand: colors.brand
    },
    extend: {
      colors: {
        brand: {
          50: '#8dfaa7',
          100: '#6bf98c',
          200: '#49f871',
          300: '#26f656',
          400: '#08f03e',
          500: '#07cd35',
          600: '#06ac2c',
          700: '#058923',
          800: '#03671a',
          900: '#024411',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
