module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: '#0EA5E9',
        grey: '#94a3b8',
        primary: '#0E1A2E'
      },
      fontSize: {
        30: '1.875rem',
        60: ['3.75rem', '3.75rem'],
        18: ['1.125rem', '2rem'],
        40: ['2.5rem', '2.5rem'],
        14: ['0.875rem', '1.5rem'],
        12: ['0.75rem', '0.75rem'],
        16: ['1rem', '1.5rem'],
        20: ['1.25rem', '1.25rem'],
        24: ['1.5rem', '1.5rem'],
      },
      height: {
        '70': '70px',
      },
      width: {
        '500': '500px',
        '80%': '80%',
        '90%': '90%',
      },
      inset: {
        '70': '70px',
      },
      gridTemplateColumns: {
        '2-custom': '1fr 3fr',
        'footer-column': '200px 1fr',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
