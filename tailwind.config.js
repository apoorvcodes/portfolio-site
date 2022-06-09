module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "rose" : "#FD4370",
        "moon": "#151728",
        "space": "#1B1E32",
        "peri": "#D4D8EF",
      },
      fontFamily: {
        curs: ["Alex Brush", 'cursive'],
        robo : ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}