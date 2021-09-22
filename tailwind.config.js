module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#1f1f29",
        "secondary": "#8305b4"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
