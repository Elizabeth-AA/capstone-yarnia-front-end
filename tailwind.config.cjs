const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'yarnia-dark-green': '#03160E',
        'yarnia-theme-green': '#15311A',
        'yarnia-light-green': '#B7BF96',
        'yarnia-lightest': '#FAFAF9',
        'yarnia-theme-orange': '#B0440A',
        'yarnia-theme-yellow': '#C78720',
        'yarnia-error-red': '#881508',
      },
      fontFamily: {
        sans: ['Lato', 'Retrophilia', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}