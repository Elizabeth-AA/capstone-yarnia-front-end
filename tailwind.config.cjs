const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    screens: {
      'sm': '250px',
      'md': '425px',
      'lg': '768px',
      'xl': '1366px',
    },
    
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
          'primary': '#15311A',
          'secondary': '#B0440A',
          'accent': '#C78720',
          'neutral': '#03160E',
          'base-100': '#B7BF96',
          'error': '#881508',
        }
      }
    ]
  },
  

  plugins: [require('@tailwindcss/typography'), require ('daisyui')],
}
// 'yarnia-lightest': '#FAFAF9'