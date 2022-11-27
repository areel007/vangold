/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#0d1f7e',
        'grey': '#bdbdbd',
      },
      fontSize: {
        '12': ['12px', '12px'],
        '14': ['14px', '14px'],
        '16': ['16px', '16px'],
        '18': ['18px', '18px'],
        '30': ['30px', '30px'],
        '60': ['60px', '60px'],
      },
      height: {
        '50': '50px',
        '70': '70px',
        '250': '250px',
        '300': '300px',
      },
      width: {
        '300': '300px',
        '90vw': '90vw',
      },
      translate: {
        '100%': '100%',
      },
      padding: {
        '20': '20px',
      }
    },
  },
  plugins: [],
}
