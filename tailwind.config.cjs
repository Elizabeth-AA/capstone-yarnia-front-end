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
          // 'secondary': '#B0440A',
          'secondary': '#E0570D',
          'accent': '#d89223',
          'neutral': '#E9EFEA',
          'base-100': '#6B9472',
          'base-200': '#2c6736',
          'error': '#881508',
        }
      }
    ]
  },
  

  plugins: [require('@tailwindcss/typography'), require ('daisyui')],
}
// 'yarnia-lightest': '#FAFAF9'
// #B7BF96 base-100 #4E7655