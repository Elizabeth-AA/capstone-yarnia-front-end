const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        serif: ['Retrophilia', ...defaultTheme.fontFamily.serif]
      },
    },
  },
  
  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#200901',
          'secondary': '#F2A127',
          'accent': '#7d2304',
          'accent-content': '#f5b452',
          'neutral': '#0F0400',
          'base-100': '#070200',
          'base-content': '#FFFACD',
          'error': '#570318',
        }
      }
    ]
  },

  plugins: [require('@tailwindcss/typography'), require ('daisyui')],
}