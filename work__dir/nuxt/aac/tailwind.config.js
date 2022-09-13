/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#004151",
        "secondary-color": "#FAA831",
        "black-shade-1": "#1b1b1b",
      },
      backgroundColor: {
        "primary-color": "#004151",
        "secondary-color": "#FAA831",
      },
      width: {
        60: "60px",
        80: "80px",
        100: "100px",
        120: "120px",
        150: "150px",
        200: "200px",
        "90vw": "90vw",
        640: "640px",
        700: "700px",
      },
      maxWidth: {
        640: "640px",
      },
      height: {
        50: "50px",
        70: "70px",
        80: "80px",
        100: "100px",
        300: "300px",
        400: "400px",
        500: "500px",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
      },
      minHeight: {
        '50vh': '50vh'
      },
      translate: {
        "50%": "50%",
        "60%": "60%",
        "100%": "100%",
      },
      inset: {
        "50%": "50%",
        "60%": "60%",
      },
    },
  },
  plugins: [],
};
