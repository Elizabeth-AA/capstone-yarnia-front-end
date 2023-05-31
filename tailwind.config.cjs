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
          'primary': '#200901',
          'secondary': '#F2A127',
          // 'accent': '#d89223',
          'neutral': '#0F0400',
          'base-100': '#070200',
          // 'base-200': '#2c6736',
          // 'base-content': '#FFFACD',
          // 'error': '#881508',
        }
      }
    ]
  },
  // 'primary': '#15311A',
  // 'secondary': '#E0570D',
  // 'accent': '#d89223',
  // 'neutral': '#131F1A',
  // 'base-100': '#6B9472',
  // 'base-200': '#2c6736',
  // 'base-content': '#FAFAF9',
  // 'error': '#881508',

  plugins: [require('@tailwindcss/typography'), require ('daisyui')],
}
// 'yarnia-lightest': '#FAFAF9'
// #B7BF96 base-100 #4E7655