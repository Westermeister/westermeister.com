const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/frontend/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      abrilfatface: ["Abril Fatface", "cursive"],
      inter: ["Inter", "sans-serif"],
      lora: ["Lora", "serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
  },
  variants: {
    extend: {
      scale: ["active"],
      textOpacity: ["active"],
      opacity: ["active"],
      borderOpacity: ["active"],
      textDecoration: ["active"],
    },
  },
  plugins: [],
};
