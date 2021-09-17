module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {
      margin:{
        'margin-inline-end':'mie'
      },
      colors:{
        'primary':'#9381FF',
        'secondary': '#B8B8FF',
        'warning': '#FFD8BE',
        'light' : '#F8F7FF',
        'sandy' : '#FFEEDD'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
