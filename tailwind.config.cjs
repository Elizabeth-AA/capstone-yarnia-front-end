const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'instock-black': '#13182C',
        'instock-slate': '#5C667E',
        'instock-graphite': '#232940',
        'instock-green': '#158463',
        'instock-green-o': 'rgba(21, 132, 99, 0.07)',
        'instock-indigo': '#2E66E5',
        'instock-cloud': '#BDC5D5',
        'instock-light-grey': '#F7F8F9',
        'instock-red': '#C94515',
        'instock-red-o': 'rgba(201, 69, 21, 0.07)',
        'instock-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Titillium Web', 'Rubik', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}