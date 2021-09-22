const { lighten } = require("polished");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "4/2": "200%",
        "48rem": "192px",
      },
      height: {
        "4/2": "200%",
        "48rem": "192px",
      },
      borderRadius: {
        40: "40%",
      },
      borderWidth: {
        12: "12px",
      },
      animation: {
        spin: "spin 2.5s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "100%": { transform: "translateY(-100%) rotate(360deg)" },
        },
      },
      colors: {
        primary: {
          light: lighten(0.1, "#1f1f29"),
          DEFAULT: "#1f1f29",
        },
        secondary: {
          light: lighten(0.1, "#8305b4"),
          DEFAULT :"#8305b4",
        }, 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
