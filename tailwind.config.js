module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      primary: ["Space Grotesk", "sans-serif"],
    },
    colors: {
      black: "#00000",
      white: "#ffff",
      blue: "#161616",
      deepOrange: "#a33327",
      lightOrange: "#c7493a",
      green: "#5CDB95",
      coolGray: "#bbbbbb",
      trueGray: "#f3f3f3",
      blueGray: "#333333",
      deepBlue: "#20222e",

      // ...
    },
    extend: {
      spacing: {
        154: "38rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
