module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        search : "#2F363F",
        slider : "#1E232A",
        navbar : "#292E35",
        line : "#E74C3C"
      },
      spacing: {
        '22' : '92px',
        '30' : '125px',
        '55' : '210px',
        '66' : '258px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
