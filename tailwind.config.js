/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/*.jsx', 'src/**/*.jsx'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light']
  }
}

