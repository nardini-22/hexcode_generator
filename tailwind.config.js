module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '4/2': "200%",
        '48rem': '192px'
      },
      height: {
        '4/2': "200%",
        '48rem': '192px'
      },
      borderRadius: {
        '40': '40%'
      },
      borderWidth: {
        '12': '12px'
      },
      animation: {
        spin: "spin 4s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "100%": { transform: "translateY(-100%) rotate(360deg)" },
        },
      },
      colors: {
        primary: "#1f1f29",
        secondary: "#8305b4",
        tertiary: "#0f1016"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
