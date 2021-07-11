module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '80px': '80px',
      max: 'max-content;'
    },
    extend: {},
    container: {
      center: true
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
